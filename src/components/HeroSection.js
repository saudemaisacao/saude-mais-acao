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

                
                    <div id="carouselExampleIndicators" className="carousel slide my-carousel my-carousel" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active" style="background-image: url('https://i.imgur.com/NnzxG4S.jpg')">

                        </div>
                        <div className="carousel-item " style="background-image: url('https://i.imgur.com/w439mEw.jpg')">

                        </div>
                        <div className="carousel-item " style="background-image: url('https://i.imgur.com/cpIrOo1.jpg')">

                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

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
            </section>
        );
    }
}
