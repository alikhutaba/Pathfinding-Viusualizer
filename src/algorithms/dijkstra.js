

import { SPACE, START, TARGET, VISITED, GRAY, PATH } from '../Components/Pathfinding/Pathfinding'

var pathSize

function dijkstra(maze, startPoint, targetPoint) {

    let animation = []
    pathSize = 0

    var tempMaze = JSON.parse(JSON.stringify(maze))

    dijkstraImplementation(tempMaze, startPoint, targetPoint, animation)

    return { pathSize: pathSize, animation: animation }
}

function dijkstraImplementation(maze, startPoint, targetPoint, animation) {


    var dijkstraRun = true
    var currentPoint

    var PrioritGray = []
    PrioritGray.push(startPoint)


    while (dijkstraRun) {

        if (PrioritGray.length === 0)
            dijkstraRun = false      // there is no path to the target

        else { // gray is not empty

            // this will be the parent
            var indx = 0
            for (var w = 0; w < PrioritGray.length; w++) {
                if (PrioritGray[w].distance > PrioritGray[indx].distance) {
                    indx = w
                }
            }
            currentPoint = PrioritGray[indx]
            PrioritGray.splice(indx, 1)

            if (maze[currentPoint.height][currentPoint.width].status === TARGET) // we have found the target
                dijkstraRun = false;

            else {

                // paint current VISITED
                if (maze[currentPoint.height][currentPoint.width].status !== START) {

                    maze[currentPoint.height][currentPoint.width].status = VISITED;
                    animation.push([VISITED, maze[currentPoint.height][currentPoint.width]])
                }

                // check non-visited neighbors


                // go up
                if (dijkstraRun && currentPoint.height > 0)
                    dijkstraRun = checkNeighbors(currentPoint, targetPoint, currentPoint.height - 1, currentPoint.width, maze, PrioritGray)

                // go down
                if (dijkstraRun && currentPoint.height + 1 < maze.length)
                    dijkstraRun = checkNeighbors(currentPoint, targetPoint, currentPoint.height + 1, currentPoint.width, maze, PrioritGray)

                // go right
                if (dijkstraRun && currentPoint.width + 1 < maze[0].length)
                    dijkstraRun = checkNeighbors(currentPoint, targetPoint, currentPoint.height, currentPoint.width + 1, maze, PrioritGray)

                // go left
                if (dijkstraRun && currentPoint.width > 0)
                    dijkstraRun = checkNeighbors(currentPoint, targetPoint, currentPoint.height, currentPoint.width - 1, maze, PrioritGray)

                if (!dijkstraRun) // target was found
                    ShowPath(currentPoint, maze, animation);

            }
        }
    }
}

function checkNeighbors(currentPoint, targetPoint, height, width, maze, PrioritGray) {

    var neighbor = maze[height][width]

    if (neighbor.status === TARGET)
        return false

    if (neighbor.status === SPACE) {
        // add it to gray
        neighbor.status = GRAY;
        neighbor.parent = [currentPoint.height, currentPoint.width];

        neighbor.distance = currentPoint.distance + 1


        maze[height][width] = neighbor
        PrioritGray.push(neighbor)
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


export default dijkstra;