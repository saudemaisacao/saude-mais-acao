import React from 'react';
import _ from 'lodash';

import {withPrefix} from '../utils';
import {markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class HeroSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="hero">
            <ul className="hero">
                {_.get(section, 'hero_items', null) && (
                    <li className='hero__carousel-item'>
                     {_.map(_.get(section, 'hero_items', null), (item, item_idx) => (
                        <div key={item_idx} className='hero__carousel-item'>
                        {_.get(item, 'image', null) && (
                        <img
                            className='hero__background' 
                            src={withPrefix(_.get(item, 'image', null))} 
                            alt={_.get(item, 'image_alt', null)}
                        />
                        )}
                        <div className="container container--lg">
                        {_.get(item, 'title', null) && (
                        <h1 className="hero__title">{_.get(item, 'title', null)}</h1>
                        )}
                        {_.get(item, 'subtitle', null) && (
                        <div className="hero__body text-block">
                        {markdownify(_.get(item, 'subtitle', null))}
                        </div>
                        )}
                        {_.get(item, 'actions', null) && (
                        <div className="hero__actions button-group">
                        <CtaButtons {...this.props} actions={_.get(item, 'actions', null)} />
                        </div>
                        )}
                        </div>
                        </div>
                     ))}
                    </li>
                )}
            </ul>
             {_.map(_.get(section, 'hero_items', null), (item, item_idx) => (
                <input key={item_idx} type="radio" className="cs_anchor radio" name="slider" id={item_idx}/>
             ))}
            </section>
        );
    }
}
