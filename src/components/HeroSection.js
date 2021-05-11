import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class HeroSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="hero">
            <div>
                {_.get(section, 'hero_items', null) && (
                    <div>
                     {_.map(_.get(section, 'hero_items', null), (item, testimonial_idx) => (
                        <div key={testimonial_idx} className="cell">
                        {_.get(testimonial, 'avatar', null) && (
                        <img className="item__avatar" src={withPrefix(_.get(testimonial, 'avatar', null))} alt={_.get(testimonial, 'avatar_alt', null)}/>
                        )}
                        </div>)}
                    </div>
                )}
            </div>
            </section>
        );
    }
}
