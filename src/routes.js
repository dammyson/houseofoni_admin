import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

const EventCreate = React.lazy(() => import('./Demo/Event/CreateEvent'));
const EventList = React.lazy(() => import('./Demo/Event/ListEvent'));


const routes = [
    { path: '/dashboard', exact: true, name: 'Dashboard', component: DashboardDefault },
    
    { path: '/event/create', exact: true, name: 'Event Create', component: EventCreate },
    { path: '/event/list', exact: true, name: 'Event List', component: EventList },
];

export default routes;