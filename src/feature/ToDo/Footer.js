import React from 'react';
import { VisibilityFilters }  from '../../actions';
import FilterLink  from './containers/LinkContainer';
const FooterComponent = () => (
<p>
Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
</p>
);

export default FooterComponent;