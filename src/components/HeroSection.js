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
                     {_.map(_.get(section, 'hero_items', null), (item, item_idx) => (
                        <div key={item_idx} className="cell">
                        {_.get(item, 'image', null) && (
                            <img 
                                src={withPrefix(_.get(item, 'image', null))} 
                                alt={_.get(item, 'image_alt', null)}
                            />
                        )}
                        </div>)}
                    </div>
                )}
            </div>
            </section>
        );
    }
}
