import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';

import components, {Layout} from '../components/index';
import {getPages} from '../utils';
import CursosItem from '../components/CursosItem';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Curso extends React.Component {
    render() {
        let cursos_sorted = _.orderBy(getPages(this.props.pageContext.pages, '/cursos'), 'frontmatter.date', 'desc');
        let project_item_len = _.size(cursos_sorted);
        return (
            <Layout {...this.props}>
            <article className="project">
              <header className="project__header">
                <div className="container container--md">
                  <h1 className="project__title line-top">{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
                  {_.get(this.props, 'pageContext.frontmatter.subtitle', null) && (
                  <div className="project__subtitle">
                    {_.get(this.props, 'pageContext.frontmatter.subtitle', null)}
                  </div>
                  )}
                </div>
              </header>
              <div className="project__body">
                  {_.map(_.get(this.props, 'pageContext.frontmatter.sections', null), (section, section_idx) => {
                      let component = _.upperFirst(_.camelCase(_.get(section, 'type', null)));
                      let Component = components[component];
                      return (
                        <Component key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} />
                      )
                  })}
              </div>
            </article>
            {
            _.map(cursos_sorted, (project_item, project_item_idx) => (
              (_.get(project_item, 'url', null) === _.get(this.props, 'pageContext.url', null)) && ((() => {
                  let curr_index = project_item_idx;
                  let next_index = curr_index + 1;
                  let prev_index = curr_index - 1;
                  let project_index_length = project_item_len - 1;
                  return (
                    (project_index_length > 0) && (
                    <nav key={project_item_idx} className="section section--portfolio">
                      <div className="container container--lg">
                        <h2 className="section__title line-top">Mais cursos</h2>
                        <div className="grid portfolio-feed portfolio-feed--tiles">
                          {(curr_index !== 0) && ((() => {
                              let prev_project = cursos_sorted[prev_index];
                              return (
                                <CursosItem {...this.props} project_page={prev_project} />
                              );
                          })())}
                          {(curr_index < project_index_length) && ((() => {
                              let next_project = cursos_sorted[next_index];
                              return (
                                <CursosItem {...this.props} project_page={next_project} />
                              );
                          })())}
                        </div>
                      </div>
                    </nav>
                    )
                  );
              })())
            ))}
            </Layout>
        );
    }
}