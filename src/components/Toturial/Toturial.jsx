import React from "react";
import "./Toturial.css";
import pathfindingPic from "../../images/favicon.png";

class Toturial extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toturialClasses: [
        "first-toturial",
        "secend-toturial",
        "third-toturial",
        "fourth-toturial",
      ],
      toturialNumber: 0,
    };

    this.changeToturial = this.changeToturial.bind(this);
    this.skipButton = this.skipButton.bind(this);
  }

  changeToturial(bottunName) {
    if (bottunName === "next") {
      if (this.state.toturialNumber < this.state.toturialClasses.length - 1) {
        document.getElementById(
          this.state.toturialClasses[this.state.toturialNumber]
        ).style.display = "none";
        document.getElementById(
          this.state.toturialClasses[this.state.toturialNumber + 1]
        ).style.display = "inline-block";
        this.setState({ toturialNumber: this.state.toturialNumber + 1 });
      }
    }
    if (bottunName === "prev") {
      if (this.state.toturialNumber > 0) {
        document.getElementById(
          this.state.toturialClasses[this.state.toturialNumber]
        ).style.display = "none";
        document.getElementById(
          this.state.toturialClasses[this.state.toturialNumber - 1]
        ).style.display = "inline-block";
        this.setState({ toturialNumber: this.state.toturialNumber - 1 });
      }
    }
  }

  skipButton() {
    document.getElementById("fullscreen").style.display = "none";
  }
  render() {
    return (
      <div id="fullscreen" class="container-fluid">
        <div id="tutorial" className="mainContainer">
          {/* --------------------------------------------------------------------------- */}
          <div className="section" id="first-toturial">
            <h3 className="title">Pathfinding Visualizer Toturial</h3>
            <hr style={{ backgroundColor: "rebeccapurple" }}></hr>

            <h5 className="sub-title">
              Pathfinding algorithm find the shortest route between two points.
            </h5>
            <h6 className="paragraph">
              In this application you can see various pathfinding algorithms in
              action, and how it work
            </h6>
            {/* <img
            src={pathfindingPic}
            alt="pathfinding project"
            className="pathfinding-img"
          ></img> */}
          </div>
          {/* --------------------------------------------------------------------------- */}
          <div className="section" id="secend-toturial">
            <h3 className="title">First Step</h3>
            <hr style={{ backgroundColor: "rebeccapurple" }}></hr>

            <h5 className="sub-title">Choose an algorithm to visualize</h5>

            <h6 className="item animation1">Breadth First Search (BFS)</h6>
            <h6 className="item animation2">Depth First Search (DFS)</h6>
            <h6 className="item animation3">Dijkstra Algorithm</h6>
            <h6 className="item animation4">A* Search</h6>
          </div>
          {/* --------------------------------------------------------------------------- */}

          <div className="section" id="third-toturial">
            <h3 className="title">Secend step</h3>
            <hr style={{ backgroundColor: "rebeccapurple" }}></hr>
            <h5 className="paragraph">Choose between clear board or maze.</h5>
            <h6 className="paragraph">
              also you can add walls to the board by click on the node.
            </h6>
            <h6 className="paragraph">
              or move the start / end node by handle clicking and draging the
              node even after the algorithm has finished running.
            </h6>
          </div>

          {/* --------------------------------------------------------------------------- */}

          <div className="section" id="fourth-toturial">
            <h3 className="title">Third Step</h3>
            <hr style={{ backgroundColor: "rebeccapurple" }}></hr>

            <h5 className="sub-title">
              Choose the nodes size from three different sizes
            </h5>
            <h5 className="sub-title">
              And, change the algorthim speed from three different speeds
            </h5>
          </div>
          {/* --------------------------------------------------------------------------- */}

          <div className="buttons">
            <a
              href="https://alikhutaba.github.io/Pathfinding-Viusualizer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full Video Toturial
            </a>
            <hr style={{ backgroundColor: "rebeccapurple" }}></hr>

            <button
              className="btn btn-info"
              onClick={() => this.changeToturial("prev")}
            >
              Previes
            </button>
            <button className="btn btn-info" onClick={() => this.skipButton()}>
              Skip
            </button>
            <button
              className="btn btn-info"
              onClick={() => this.changeToturial("next")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Toturial;
