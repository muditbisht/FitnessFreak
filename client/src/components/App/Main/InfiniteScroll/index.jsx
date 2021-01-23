import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Spinner from './Spinner';

import { Replay, Replay30 } from '@material-ui/icons';

import InfiniteScroll from 'react-infinite-scroller';
import Question from "../../../Question/Question/ques";

import CONFIG from '../../../../config';
import ajaxRequest from '../../../../ajaxRequest';


// Styled Components =======================================================================================================

const StyledInfiniteScroll = styled(InfiniteScroll)`
    min-height: 100%;
    display: grid;
    place-items: center;
`;

let Reload = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        font-size: 1.5em;
    }

    .reload-icon{
        margin-top: 10px;
        font-size: 2.5em;
        cursor: pointer;
    }
`;

// ==========================================================================================================================
export default function (props) {
    const [feed, setFeed] = useState({questions:[], current_page: 0 });
    const [hasMore, setHasMore] = useState(true);
    const [reload, setReload] = useState(null);


    useEffect(() => {
        setFeed({ questions: [], current_page: 0 });
        setHasMore(true);
        return () => {
        }
    }, [props.url]);

    async function refreshFeed(event) {
        await ajaxRequest('POST', `${CONFIG.API_DOMAIN}/feed/refresh-feed`);
        setFeed({questions:[], current_page: 0});
        setHasMore(true);
    }
  
    async function handleLoadMore() {
        let page = feed.current_page+1;
        setHasMore(true);
        setReload(null);
        
        let newQuestions = await ajaxRequest('GET', `${props.url}page=${page}`);
        if (newQuestions.data.success) {
            if (newQuestions.data.questions.length > 0) {
                return setFeed({
                  questions: feed.questions.concat(newQuestions.data.questions),
                  current_page: feed.current_page+1
                });
            } else {
                return setHasMore(false);
            }
        } else {
            setHasMore(false);
            setReload(
                <Reload>
                    <div>Something went wrong! please reload</div>
                    <Replay
                        className="reload-icon"
                        onClick={handleLoadMore}
                    />
                </Reload>);
        }

        
    }
    return (
        <>
        <StyledInfiniteScroll
            pageStart={0}
            loadMore={handleLoadMore}
            hasMore={hasMore}
            loader={ <Spinner /> }
        >
            {feed.questions.map(question => <Question key={question._id} question={question} />)}
            {reload}
        </StyledInfiniteScroll>
        </>
    );
}