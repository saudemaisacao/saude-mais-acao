import React from 'react';
import _ from 'lodash';

import {withPrefix} from '../utils';

export default class HeroSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="hero">
            <div>
                {_.get(section, 'hero_items', null) && (
                    <div>
                     {_.map(_.get(section, 'hero_items', null), (item, item_idx) => (
                        <div key={item_idx} className="container container--lg">
                        {_.get(item, 'image', null) && (
                            <img 
                                src={withPrefix(_.get(item, 'image', null))} 
                                alt={_.get(item, 'image_alt', null)}
                            />
                        )}
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
                     ))}
                    </div>
                )}
            </div>
            </section>
        );
    }
}
