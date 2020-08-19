
import { SPACE, START, TARGET, VISITED, PATH } from '../Components/Pathfinding/Pathfinding'

var Deque = require("collections/deque");

var pathSize

function dfs(maze, startPoint, targetPoint) {

    let animation = []
    pathSize = 0

    var tempMaze = JSON.parse(JSON.stringify(maze))

    dfsImplementation(tempMaze, startPoint, targetPoint, animation)

    return { pathSize: pathSize, animation: animation }
}

function dfsImplementation(maze, startPoint, targetPoint, animation) {


    let dfsRun = true
    var currentPoint

    var gray = new Deque();
    gray.push(startPoint)

    while (dfsRun) {

        if (gray.length === 0)
            dfsRun = false      // there is no path to the target

        else { // gray is not empty

            currentPoint = gray.pop() // this will be the parent

            if (maze[currentPoint.height][currentPoint.width].status === TARGET) // we have found the target
                dfsRun = false;

            else {

                // paint pt VISITED
                if (maze[currentPoint.height][currentPoint.width].status !== START) {

                    maze[currentPoint.height][currentPoint.width].status = VISITED;
                    animation.push([VISITED, maze[currentPoint.height][currentPoint.width]])
                }

                // check non-visited neighbors

                // go right
                if (dfsRun && currentPoint.width + 1 < maze[0].length)
                    dfsRun = checkNeighbors(currentPoint, currentPoint.height, currentPoint.width + 1, maze, gray)

                // go up
                if (dfsRun && currentPoint.height + 1 < maze.length)
                    dfsRun = checkNeighbors(currentPoint, currentPoint.height + 1, currentPoint.width, maze, gray)

                // go left
                if (dfsRun && currentPoint.width > 0)
                    dfsRun = checkNeighbors(currentPoint, currentPoint.height, currentPoint.width - 1, maze, gray)

                // go down
                if (dfsRun && currentPoint.height > 0)
                    dfsRun = checkNeighbors(currentPoint, currentPoint.height - 1, currentPoint.width, maze, gray)

                if (!dfsRun) // target was found
                    ShowPath(currentPoint, maze, animation);

            }
        }
    }
}

function checkNeighbors(currentPoint, height, width, maze, gray) {

    if (maze[height][width].status === TARGET)
        return false

    if (maze[height][width].status === SPACE) {
        // add it to gray
        // maze[height][width].status = GRAY;
        maze[height][width].parent = [currentPoint.height, currentPoint.width];
        gray.push(maze[height][width])
    }
    return true;
}


function ShowPath(node, maze, animation) {

    let temp = []
    while (node.status !== START) {
        temp.push([PATH, maze[node.height][node.width]])
        node = maze[node.parent[0]][node.parent[1]]
    }
    pathSize = temp.length

    for (var i = temp.length - 1; i >= 0; i--)
        animation.push(temp[i])

}

export default dfs;