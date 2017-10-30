import React from "react";

class Comment extends React.Component {
    render() {
        return (
            <div className="panel article">
                <div className="panel-heading">
                    <h2 className="panel-title">Comment Title - Author</h2>
                </div>
                <div className="panel-body">
                    {/*link to full article*/}
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue orci, tempus non ligula
                        id, finibus congue diam. Aenean condimentum pharetra tincidunt. Vestibulum nec augue quis ante
                        blandit eleifend. Mauris id dictum mi. Duis in turpis mauris. Fusce sit amet erat facilisis,
                        congue urna malesuada, blandit tortor. Donec eu mauris aliquet, mattis neque vel, dictum lectus.
                        Cras eu eros at leo varius rutrum. Vivamus dolor libero, commodo ut nibh et, iaculis gravida mi.
                        Curabitur leo ex, vulputate non laoreet vitae, imperdiet id ligula. Donec varius, arcu id
                        rhoncus porttitor, sapien nisl ornare risus, et posuere lectus lorem sit amet metus. Proin felis
                        velit, ultrices et arcu quis, euismod porta ex. Fusce pharetra enim vitae orci auctor
                        ullamcorper. Praesent accumsan in lacus non sagittis.
                    </p>
                </div>
            </div>
        )
    }
}

export default Comment;