import React from 'react';
import { Route } from 'react-router-dom';
import { routes } from '../../Routes';

const Story = () => {
    return (
        <>
            <Route exact path={routes.story} component={routes.story.component} />
        </>
    );
};

export default Story;
