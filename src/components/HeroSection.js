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
                <div class="container">
		<div class="carousel slide" id="main-carousel" data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target="#main-carousel" data-slide-to="0" class="active"></li>
				<li data-target="#main-carousel" data-slide-to="1"></li>
				<li data-target="#main-carousel" data-slide-to="2"></li>
				<li data-target="#main-carousel" data-slide-to="3"></li>
			</ol><!-- /.carousel-indicators -->
			
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img class="d-block img-fluid" src="https://s19.postimg.cc/qzj5uncgj/slide1.jpg" alt="">
					<div class="carousel-caption d-none d-md-block">
						<h1>Mountain</h1>
					</div>
				</div>
				<div class="carousel-item">
					<img class="d-block img-fluid" src="https://s19.postimg.cc/lmubh3h0j/slide2.jpg" alt="">
					<div class="carousel-caption d-none d-md-block">
						<h3>Mountain</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci esse vitae exercitationem fugit, numquam minus!</p>
					</div>
				</div>
				<div class="carousel-item">
					<img class="d-block img-fluid" src="https://s19.postimg.cc/99hh9lr5v/slide3.jpg" alt="">
					<div class="carousel-caption d-none d-md-block">
						<h3>Mountain</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci esse vitae exercitationem fugit, numquam minus!</p>
					</div>
				</div>
				<div class="carousel-item">
					<img src="https://s19.postimg.cc/nenabzsnn/slide4.jpg" alt="" class="d-block img-fluid">
					<div class="carousel-caption d-none d-md-block">
						<h3>Mountain</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci esse vitae exercitationem fugit, numquam minus!</p>
					</div>
				</div>
			</div><!-- /.carousel-inner -->
			
			<a href="#main-carousel" class="carousel-control-prev" data-slide="prev">
				<span class="carousel-control-prev-icon"></span>
				<span class="sr-only" aria-hidden="true">Prev</span>
			</a>
			<a href="#main-carousel" class="carousel-control-next" data-slide="next">
				<span class="carousel-control-next-icon"></span>
				<span class="sr-only" aria-hidden="true">Next</span>
			</a>
		</div><!-- /.carousel -->
	</div><!-- /.container -->
                )}
              </div>
            </section>
        );
    }
}
