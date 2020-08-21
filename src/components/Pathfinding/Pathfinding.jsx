import React from "react";

import "./Pathfinding.css";
import node from "./node.js";

import bfs from "../../algorithms/bfs.js";
import dfs from "../../algorithms/dfs.js";
import aStar from "../../algorithms/aStar.js";
import dijkstra from "../../algorithms/dijkstra.js";

export const WALL = "wall";
export const SPACE = "space";
export const START = "start";
export const TARGET = "target";
export const VISITED = "visit";
export const GRAY = "gray";
export const PATH = "path";

export const BFS = "BFS";
export const DFS = "DFS";
export const ASTAR = "A* Search";
export const DIJKSTRA = "Dijkstra";

const BIG_NODE_SIZE = 45;
const MEDIUM_NODE_SIZE = 35;
const SMALL_NODE_SIZE = 25;

const FAST = 1;
const AVERAGE = 25;
const SLOW = 50;

class Pathfinding extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grid: [],
      algorithm: "",
      nodeSize: MEDIUM_NODE_SIZE,
      startPoint: { height: 1, width: 1 },
      targetPoint: { height: 2, width: 2 },
      isAlgorithmRun: false,
      animations: [],
      visitedNodesNumber: 0,
      pathNodesNumber: 0,
      showPath: false,
      width: window.innerWidth,
      height: window.innerHeight,
      clearBoard: false,
      speed: AVERAGE,
      previousStartNodeStatus: SPACE,
      previousEndNodeStatus: SPACE,
      mouseIsPressed: false,
      startNodePressed: false,
      EndNodePressed: false,
    };

    this.setUpGrid = this.setUpGrid.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.runAlgorithm = this.runAlgorithm.bind(this);
    this.changeBoard = this.changeBoard.bind(this);
    this.runanimation = this.runanimation.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    this.setUpGrid(this.state.nodeSize, this.state.clearBoard);
  }

  async setUpGrid(size, clearBoard) {
    const grid = [];
    let i, j;
    let height = Math.floor((this.state.height - 160) / size);
    let width = Math.floor((this.state.width - 50) / size);

    await this.clearpath();

    let id = 0;
    for (i = 0; i < height; i++) {
      grid[i] = [];
      for (j = 0; j < width; j++) {
        grid[i][j] = new node(++id, i, j, SPACE);
      }
    }

    // set walls
    if (!clearBoard) {
      for (i = 0; i < height; i++) {
        for (j = 0; j < width; j++) {
          if (i % 2 === 0) {
            // mostly walls
            if (Math.random() * 100 < 35) grid[i][j].status = WALL;
          } else {
            // mostly spaces
            if (Math.random() * 100 < 25) grid[i][j].status = WALL;
          }
        }
      }
      let xStart = Math.floor(Math.random() * (height - 1) + 1);
      let yStart = Math.floor(Math.random() * (width - 1) + 1);
      let xEnd = Math.floor(Math.random() * (height - 1) + 1);
      let yEnd = Math.floor(Math.random() * (width - 1) + 1);
      grid[xStart][yStart].status = START;
      grid[xEnd][yEnd].status = TARGET;
      this.setState({
        targetPoint: grid[xEnd][yEnd],
        startPoint: grid[xStart][yStart],
      });
    } else {
      grid[5][5].status = START;
      grid[height - 5][width - 5].status = TARGET;
      this.setState({
        targetPoint: grid[height - 5][width - 5],
        startPoint: grid[5][5],
      });
    }
    this.setState({ grid: grid });
  }

  async runAlgorithm(grid, algorithm, startPoint, targetPoint, withAnimations) {
    if (algorithm === "") return;

    let fun =
      algorithm === BFS
        ? bfs
        : algorithm === DFS
        ? dfs
        : algorithm === ASTAR
        ? aStar
        : algorithm === DIJKSTRA
        ? dijkstra
        : null;

    if (!fun) return;

    await this.clearpath();
    var result = fun(grid, startPoint, targetPoint);

    this.setState({
      animations: result.animation,
      isAlgorithmRun: true,
      pathNodesNumber: result.pathSize,
      visitedNodesNumber: result.animation.length - result.pathSize,
      showPath: true,
    });

    if (withAnimations)
      this.runanimation(JSON.parse(JSON.stringify(result.animation)));
    else this.changePath(result.animation);
  }

  runanimation(animations) {
    if (!animations.length) {
      setTimeout(() => {
        this.setState({ isAlgorithmRun: false });
      }, 100);
      return;
    }
    setTimeout(() => {
      var node = animations[0][1];

      if (animations[0][0] === PATH)
        document.getElementById(`${node.height}-${node.width}`).className =
          "path-node";
      else
        document.getElementById(`${node.height}-${node.width}`).className =
          "visit-node";

      animations.shift();
      this.runanimation(animations);
    }, this.state.speed);
  }

  changePath(animations) {
    for (let i = 0; i < animations.length; i++) {
      var node = animations[i][1];
      if (animations[i][0] === PATH)
        document.getElementById(`${node.height}-${node.width}`).className =
          "path-node";
      else
        document.getElementById(`${node.height}-${node.width}`).className =
          "visit-node2";
    }
    this.setState({ isAlgorithmRun: false });
  }

  async clearpath() {
    const animations = this.state.animations;
    const grid = this.state.grid;

    for (let i = 0; i < animations.length; i++) {
      const node = animations[i][1];

      if (grid[node.height][node.width].status === SPACE)
        document.getElementById(`${node.height}-${node.width}`).className =
          "space-node";

      if (grid[node.height][node.width].status === WALL)
        document.getElementById(`${node.height}-${node.width}`).className =
          "wall-node";

      grid[node.height][node.width].h = 0;
      grid[node.height][node.width].g = 0;
      grid[node.height][node.width].distance = Infinity;
    }
    this.setState({
      grid: grid,
      animations: [],
      pathNodesNumber: 0,
      visitedNodesNumber: 0,
      showPath: false,
    });
  }

  changeBoard(status) {
    this.setState({ clearBoard: status });
    this.setUpGrid(this.state.nodeSize, status);
  }

  changeSize(size) {
    this.setState({ nodeSize: size });
    this.setUpGrid(size, this.state.clearBoard);
  }

  onMouseDown(rowIdx, nodeIdx) {
    const grid = this.state.grid;
    var node = grid[rowIdx][nodeIdx];

    grid[rowIdx][nodeIdx].status =
      node.status === WALL ? SPACE : node.status === SPACE ? WALL : node.status;

    if (grid[rowIdx][nodeIdx].status === START)
      this.setState({ startNodePressed: true });

    if (grid[rowIdx][nodeIdx].status === TARGET)
      this.setState({ EndNodePressed: true });

    this.setState({ grid: grid, mouseIsPressed: true });
  }

  onMouseEnter(rowIdx, nodeIdx) {
    if (!this.state.mouseIsPressed) return;

    const grid = this.state.grid;

    if (!this.state.startNodePressed && !this.state.EndNodePressed) {
      var node = grid[rowIdx][nodeIdx];
      grid[rowIdx][nodeIdx].status =
        node.status === WALL
          ? SPACE
          : node.status === SPACE
          ? WALL
          : node.status;
    }

    if (
      this.state.startNodePressed &&
      grid[rowIdx][nodeIdx].status !== TARGET
    ) {
      let startNode = this.state.startPoint;
      let previousStartNodeStatus = grid[rowIdx][nodeIdx].status;
      grid[startNode.height][
        startNode.width
      ].status = this.state.previousStartNodeStatus;
      grid[rowIdx][nodeIdx].status = START;
      this.setState({
        startPoint: grid[rowIdx][nodeIdx],
        previousStartNodeStatus: previousStartNodeStatus,
      });
      if (this.state.showPath)
        this.runAlgorithm(
          grid,
          this.state.algorithm,
          grid[rowIdx][nodeIdx],
          this.state.targetPoint,
          false
        );
    }

    if (this.state.EndNodePressed && grid[rowIdx][nodeIdx].status !== START) {
      let endNode = this.state.targetPoint;
      let previousEndNodeStatus = grid[rowIdx][nodeIdx].status;
      grid[endNode.height][
        endNode.width
      ].status = this.state.previousEndNodeStatus;
      grid[rowIdx][nodeIdx].status = TARGET;
      this.setState({
        targetPoint: grid[rowIdx][nodeIdx],
        previousEndNodeStatus: previousEndNodeStatus,
      });
      if (this.state.showPath)
        this.runAlgorithm(
          grid,
          this.state.algorithm,
          this.state.startPoint,
          grid[rowIdx][nodeIdx],
          false
        );
    }

    this.setState({ grid: grid });
  }

  onMouseUp() {
    if (this.state.startNodePressed)
      this.setState({ mouseIsPressed: false, startNodePressed: false });
    else if (this.state.EndNodePressed)
      this.setState({ mouseIsPressed: false, EndNodePressed: false });
    else this.setState({ mouseIsPressed: false });
  }

  render() {
    const {
      grid,
      algorithm,
      startPoint,
      targetPoint,
      isAlgorithmRun,
      nodeSize,
      visitedNodesNumber,
      pathNodesNumber,
      showPath,
    } = this.state;

    return (
      <div className="mainContainer">
        {/* toolbar */}
        <div className="main-bar row">
          {/* DEV */}
          <div className="devop">
            <h6 className="developed">Developed by</h6>
            <h6 className="developed">Ali Khutaba</h6>
          </div>

          {/* DEV */}
          <div className="social-pic">
            <a
              href="https://www.linkedin.com/in/ali-khutaba-843627173/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="linkedin-img"
                src="https://www.freepnglogos.com/uploads/linkedin-logo-hd-png-3.png"
                alt="Click her"
              ></img>
            </a>
          </div>

          {/* Github */}
          <div className="social-pic">
            <a
              href="https://github.com/alikhutaba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="github-img"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/2b14985a-c66e-4dbd-b09c-609fe0678dae/d5ariic-ff63c049-4a2e-46bb-bae5-a420d50a4e54.png"
                alt="Click her"
              ></img>
            </a>
          </div>

          {/* algorithm Buttons */}
          <div className="main-button">
            <button
              type="button"
              className="btn btn-outline-primary"
              data-toggle="dropdown"
            >
              {algorithm === "" ? "Algorithm" : algorithm}
              <a className="dropdown-toggle"></a>{" "}
            </button>

            <div className="dropdown-menu">
              <button
                onClick={
                  !isAlgorithmRun
                    ? () => this.setState({ algorithm: BFS })
                    : null
                }
                type="button"
                className=" dropdown-item"
              >
                <h6>Breadth First Search (BFS)</h6>
              </button>
              <button
                onClick={
                  !isAlgorithmRun
                    ? () => this.setState({ algorithm: DFS })
                    : null
                }
                type="button"
                className="dropdown-item"
              >
                <h6>Depth First Search (DFS)</h6>
              </button>
              <button
                onClick={
                  !isAlgorithmRun
                    ? () => this.setState({ algorithm: DIJKSTRA })
                    : null
                }
                type="button"
                className="dropdown-item"
              >
                <h6>Dijkstra Algorithm</h6>
              </button>
              <button
                onClick={
                  !isAlgorithmRun
                    ? () => this.setState({ algorithm: ASTAR })
                    : null
                }
                type="button"
                className="dropdown-item"
              >
                <h6>A* Search</h6>
              </button>
            </div>
          </div>

          {/* board Buttons */}
          <div className="main-button">
            <button
              type="button"
              className="btn btn-outline-primary"
              data-toggle="dropdown"
            >
              Board<a className="dropdown-toggle"></a>
            </button>

            <div className="dropdown-menu">
              <button
                onClick={!isAlgorithmRun ? () => this.changeBoard(false) : null}
                type="button"
                className="dropdown-item"
              >
                <h6>Random Maze</h6>
              </button>
              <button
                onClick={!isAlgorithmRun ? () => this.clearpath() : null}
                type="button"
                className="dropdown-item"
              >
                <h6>Clear Path</h6>
              </button>
              <button
                onClick={!isAlgorithmRun ? () => this.changeBoard(true) : null}
                type="button"
                className="dropdown-item"
              >
                <h6>Clear Board</h6>
              </button>
            </div>
          </div>

          {/* Size Buttons */}
          <div className="main-button">
            <button
              type="button"
              className="btn btn-outline-primary"
              data-toggle="dropdown"
            >
              Nodes<a className="dropdown-toggle"></a>
            </button>

            <div className="dropdown-menu">
              <button
                onClick={
                  !isAlgorithmRun ? () => this.changeSize(BIG_NODE_SIZE) : null
                }
                type="button"
                className="dropdown-item"
              >
                <h6>Big Nodes</h6>
              </button>
              <button
                onClick={
                  !isAlgorithmRun
                    ? () => this.changeSize(MEDIUM_NODE_SIZE)
                    : null
                }
                type="button"
                className="dropdown-item"
              >
                <h6>Medium Nodes</h6>
              </button>
              <button
                onClick={
                  !isAlgorithmRun
                    ? () => this.changeSize(SMALL_NODE_SIZE)
                    : null
                }
                type="button"
                className="dropdown-item"
              >
                <h6>Small Nodes</h6>
              </button>
            </div>
          </div>

          {/* Size Buttons */}
          <div className="main-button">
            <button
              type="button"
              className="btn btn-outline-primary"
              data-toggle="dropdown"
            >
              Speed<a className="dropdown-toggle"></a>
            </button>

            <div className="dropdown-menu">
              <button
                onClick={() => this.setState({ speed: FAST })}
                type="button"
                className="dropdown-item"
              >
                <h6>Fast</h6>
              </button>
              <button
                onClick={() => this.setState({ speed: AVERAGE })}
                type="button"
                className="dropdown-item"
              >
                <h6>Average</h6>
              </button>
              <button
                onClick={() => this.setState({ speed: SLOW })}
                type="button"
                className="dropdown-item"
              >
                <h6>Slow</h6>
              </button>
            </div>
          </div>

          {/* run algorithm */}
          <div className="main-button">
            <button
              onClick={
                !isAlgorithmRun
                  ? () =>
                      this.runAlgorithm(
                        grid,
                        algorithm,
                        startPoint,
                        targetPoint,
                        true
                      )
                  : null
              }
              style={isAlgorithmRun ? { cursor: "not-allowed" } : null}
              type="button"
              className=" btn btn-outline-danger"
            >
              {!isAlgorithmRun ? "Run" : algorithm}
            </button>
          </div>

          {/* info */}
          <div className="info">
            <div>
              <h6 className="info-font">
                {algorithm === ""
                  ? "Choose an algorithm"
                  : "Algorithm : " + algorithm}
              </h6>
            </div>
            <div>
              <h6
                className="info-font"
                style={{ display: showPath ? "block" : "none" }}
              >
                Visited {visitedNodesNumber} Nodes. Path length{" "}
                {pathNodesNumber}
              </h6>
            </div>
          </div>
        </div>

        <div className="col-sm-12" id="mainBoardID">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  return (
                    <div
                      id={`${rowIdx}-${nodeIdx}`}
                      key={nodeIdx}
                      className={
                        node.status === SPACE
                          ? "space-node"
                          : node.status === WALL
                          ? "wall-node"
                          : node.status === VISITED
                          ? "visit-node"
                          : node.status === PATH
                          ? "path-node"
                          : node.status === START
                          ? "start-node"
                          : node.status === TARGET
                          ? "target-node"
                          : "space-node"
                      }
                      style={{
                        height: nodeSize + "px",
                        width: nodeSize + "px",
                      }}
                      onMouseDown={
                        !isAlgorithmRun
                          ? () => this.onMouseDown(rowIdx, nodeIdx)
                          : null
                      }
                      onMouseEnter={
                        !isAlgorithmRun
                          ? () => this.onMouseEnter(rowIdx, nodeIdx)
                          : null
                      }
                      onMouseUp={
                        !isAlgorithmRun ? () => this.onMouseUp() : null
                      }
                    ></div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Pathfinding;
