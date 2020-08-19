
import { START, TARGET, VISITED, PATH, WALL } from '../Components/Pathfinding/Pathfinding'

var pathSize

function aStar(maze, startPoint, targetPoint) {

    let animation = []
    pathSize = 0

    var tempMaze = JSON.parse(JSON.stringify(maze))

    aStarImplementation(tempMaze, startPoint, targetPoint, animation)

    return { pathSize: pathSize, animation: animation }
}


function aStarImplementation(grid, startPoint, targetPoint, animation) {


    var openList = [];
    openList.push(startPoint);

    while (openList.length > 0) {

        var lowInd = 0;
        for (let i = 0; i < openList.length; i++) {
            if (openList[i].f <= openList[lowInd].f) { lowInd = i; }
        }
        var currentNode = openList[lowInd];
        openList.splice(lowInd, 1)

        if (grid[currentNode.height][currentNode.width].status === TARGET) {
            ShowPath(currentNode.parent, grid, animation)
            return
        }

        if (grid[currentNode.height][currentNode.width].status !== START) {
            grid[currentNode.height][currentNode.width].status = VISITED;
            animation.push([VISITED, grid[currentNode.height][currentNode.width]])
        }

        var neighbors = getNeighbors(grid, currentNode);

        for (let i = 0; i < neighbors.length; i++) {
            var neighbor = neighbors[i];
            if (neighbor.status === VISITED || neighbor.status === WALL)
                continue;

            var gScore = currentNode.g + 1;
            var gScoreIsBest = false;


            if (!openList.includes(neighbor)) {

                gScoreIsBest = true;
                neighbor.g = gScore
                neighbor.h = heuristic(neighbor.height, neighbor.width, targetPoint.height, targetPoint.width);
                openList.push(neighbor);
            }
            else if (gScore < neighbor.g) {
                gScoreIsBest = true;
            }

            if (gScoreIsBest) {
                neighbor.parent = currentNode;
                neighbor.g = gScore;
                neighbor.f = neighbor.g + neighbor.h;
            }
        }
    }

    return [];
}

function heuristic(nx, ny, ex, ey) {
    var d1 = Math.abs(ex - nx);
    var d2 = Math.abs(ey - ny);
    return d1 + d2;
}

function getNeighbors(grid, node) {
    var ret = [];
    var x = node.height;
    var y = node.width;

    if (grid[x - 1] && grid[x - 1][y]) {
        ret.push(grid[x - 1][y]);
    }
    if (grid[x + 1] && grid[x + 1][y]) {
        ret.push(grid[x + 1][y]);
    }
    if (grid[x][y - 1] && grid[x][y - 1]) {
        ret.push(grid[x][y - 1]);
    }
    if (grid[x][y + 1] && grid[x][y + 1]) {
        ret.push(grid[x][y + 1]);
    }
    return ret;
}

function ShowPath(node, grid, animation) {

    let temp = []
    while (node.status !== START) {
        temp.push([PATH, grid[node.height][node.width]])
        node = node.parent
    }
    pathSize = temp.length

    for (var i = temp.length - 1; i >= 0; i--)
        animation.push(temp[i])
}

export default aStar;

