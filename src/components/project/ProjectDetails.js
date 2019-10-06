import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    console.log(id)
    
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-contentent">
                    <span className="card-title">
                        Project Title - {id}
                    </span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque vel velit adipisci repudiandae quam facere a eaque mollitia molestiae, neque explicabo, dolores cumque ipsam totam iste. Tempore sequi tempora minima.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the Net Ninja</div>
                    <div>2nd Sep, 2019</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
