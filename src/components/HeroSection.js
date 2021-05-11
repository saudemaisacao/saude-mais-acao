import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class HeroSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="hero">
              <div className="container container--lg">

                <div class="carousel slide" id="main-carousel" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#main-carousel" data-slide-to="0" class="active"></li>
                        <li data-target="#main-carousel" data-slide-to="1"></li>
                        <li data-target="#main-carousel" data-slide-to="2"></li>
                        <li data-target="#main-carousel" data-slide-to="3"></li>
			        </ol>

                    {_.get(section, 'title', null) && (
                    <h1 className="hero__title">{_.get(section, 'title', null)}</h1>
                    )}
                    {_.get(section, 'content', null) && (
                    <div className="hero__body text-block">
                    {markdownify(_.get(section, 'content', null))}
                    </div>
                    )}
                    {_.get(section, 'actions', null) && (
                    <div className="hero__actions button-group">
                    <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />
                    </div>
                    )}
                </div>

              </div>
            </section>
        );
    }
}
