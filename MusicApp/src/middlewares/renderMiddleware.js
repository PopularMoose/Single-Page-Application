import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../views/navigationView.js';

const headerElement = document.querySelector('.header-navigation');
const contentElement = document.querySelector('#main-content');

const renderContent = (TemplateResult) => {
    render(TemplateResult, contentElement);
}

export const renderNavigation = (ctx, next) => {
  
    render(navigationView(ctx), headerElement)
    next();
};

export const renderContentMiddleware = (ctx, next) => {

    ctx.render = renderContent;

    next();
};