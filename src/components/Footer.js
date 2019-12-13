import React from 'react';
import _ from 'lodash';

import {markdownify, Link} from '../utils';

export default class Footer extends React.Component {
    render() {
        // Create footnotes by adding "footnotes: footnote-goes-here" to your
        // page's frontmatter.
        var footnotes = _.get(this.props, 'pageContext.frontmatter.footnotes')

        return (
            <footer className="footer container">
                {footnotes ? (
                    <div className='footnotes'>
                        <p>Footnotes:</p>
                        {markdownify(footnotes)}
                    </div>
                ) : null}
                <div className="copyright">{markdownify(_.get(this.props, 'pageContext.site.data.footer.content'))}</div>
                <nav>
                    {_.map(_.get(this.props, 'pageContext.site.data.footer.links'), (link_item, link_item_idx) => (
                        <Link key={link_item_idx} className="subtle-link" to={_.get(link_item, 'url')} {...(_.get(link_item, 'new_window') ? {target: '_blank'} : null)}>{_.get(link_item, 'text')}</Link>
                    ))}
                </nav>
            </footer>
        );
    }
}
