(this["webpackJsonppathfinding-visualizer"]=this["webpackJsonppathfinding-visualizer"]||[]).push([[0],{25:function(t,e,a){t.exports=a(46)},30:function(t,e,a){},31:function(t,e,a){},32:function(t,e,a){t.exports=a.p+"static/media/favicon.4cff88f9.png"},37:function(t,e,a){},46:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(24),r=a.n(i);a(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o,h=a(4),l=a(8),u=a(1),c=a(10),d=a(9),m=(a(31),a(32),function(t){Object(c.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).state={toturialClasses:["first-toturial","secend-toturial","third-toturial","fourth-toturial"],toturialNumber:0},n.changeToturial=n.changeToturial.bind(Object(u.a)(n)),n.skipButton=n.skipButton.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"changeToturial",value:function(t){console.log(this.state.toturialClasses[this.state.toturialNumber]),"next"===t&&this.state.toturialNumber<this.state.toturialClasses.length-1&&(document.getElementById(this.state.toturialClasses[this.state.toturialNumber]).style.display="none",document.getElementById(this.state.toturialClasses[this.state.toturialNumber+1]).style.display="inline-block",this.setState({toturialNumber:this.state.toturialNumber+1})),"prev"===t&&this.state.toturialNumber>0&&(document.getElementById(this.state.toturialClasses[this.state.toturialNumber]).style.display="none",document.getElementById(this.state.toturialClasses[this.state.toturialNumber-1]).style.display="inline-block",this.setState({toturialNumber:this.state.toturialNumber-1}))}},{key:"skipButton",value:function(){document.getElementById("tutorial").style.display="none"}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{id:"tutorial",className:"mainContainer"},s.a.createElement("div",{className:"section",id:"first-toturial"},s.a.createElement("h3",{className:"title"},"Pathfinding Visualizer Toturial"),s.a.createElement("hr",{style:{backgroundColor:"rebeccapurple"}}),s.a.createElement("h5",{className:"sub-title"},"Pathfinding algorithm find the shortest route between two points."),s.a.createElement("h6",{className:"paragraph"},"In this application you can see various pathfinding algorithms in action, and how it work")),s.a.createElement("div",{className:"section",id:"secend-toturial"},s.a.createElement("h3",{className:"title"},"First Step"),s.a.createElement("hr",{style:{backgroundColor:"rebeccapurple"}}),s.a.createElement("h5",{className:"sub-title"},"Choose an algorithm to visualize"),s.a.createElement("h6",{className:"item animation1"},"Breadth First Search (BFS)"),s.a.createElement("h6",{className:"item animation2"},"Depth First Search (DFS)"),s.a.createElement("h6",{className:"item animation3"},"Dijkstra Algorithm"),s.a.createElement("h6",{className:"item animation4"},"A* Search")),s.a.createElement("div",{className:"section",id:"third-toturial"},s.a.createElement("h3",{className:"title"},"Secend step"),s.a.createElement("hr",{style:{backgroundColor:"rebeccapurple"}}),s.a.createElement("h5",{className:"paragraph"},"Choose between clear board or maze."),s.a.createElement("h6",{className:"paragraph"},"also you can add walls to the board by click on the node."),s.a.createElement("h6",{className:"paragraph"},"or move the start / end node by handle clicking and draging the node even after the algorithm has finished running.")),s.a.createElement("div",{className:"section",id:"fourth-toturial"},s.a.createElement("h3",{className:"title"},"Third Step"),s.a.createElement("hr",{style:{backgroundColor:"rebeccapurple"}}),s.a.createElement("h5",{className:"sub-title"},"Choose the nodes size from three different sizes"),s.a.createElement("h5",{className:"sub-title"},"And, change the algorthim speed from three different speeds")),s.a.createElement("div",{className:"buttons"},s.a.createElement("a",{href:"https://alikhutaba.github.io/Pathfinding-Viusualizer/",target:"_blank",rel:"noopener noreferrer"},"Full Video Toturial"),s.a.createElement("hr",{style:{backgroundColor:"rebeccapurple"}}),s.a.createElement("button",{className:"btn btn-info",onClick:function(){return t.changeToturial("prev")}},"Previes"),s.a.createElement("button",{className:"btn btn-info",onClick:function(){return t.skipButton()}},"Skip"),s.a.createElement("button",{className:"btn btn-info",onClick:function(){return t.changeToturial("next")}},"Next")))}}]),a}(s.a.Component)),g=(a(16),a(35),a(3)),p=a.n(g),f=a(11),b=(a(37),function t(e,a,n,s){Object(h.a)(this,t),this.id=e,this.height=a,this.width=n,this.status=s,this.parent=null,this.g=0,this.h=0,this.f=this.g+this.h,this.distance=1/0}),w=a(17);function N(t,e,a,n,s){return n[e][a].status!==W&&(n[e][a].status===J&&(n[e][a].status=R,n[e][a].parent=[t.height,t.width],s.push(n[e][a])),!0)}function v(t,e,a){for(var n=[];t.status!==U;)n.push([G,e[t.height][t.width]]),t=e[t.parent[0]][t.parent[1]];o=n.length;for(var s=n.length-1;s>=0;s--)a.push(n[s])}var E,S=function(t,e,a){var n=[];return o=0,function(t,e,a,n){var s,i=!0,r=new w;r.push(e);for(;i;)0===r.length?i=!1:(s=r.shift(),t[s.height][s.width].status===W?i=!1:(t[s.height][s.width].status!==U&&(t[s.height][s.width].status=T,n.push([T,t[s.height][s.width]])),i&&s.height+1<t.length&&(i=N(s,s.height+1,s.width,t,r)),i&&s.height>0&&(i=N(s,s.height-1,s.width,t,r)),i&&s.width+1<t[0].length&&(i=N(s,s.height,s.width+1,t,r)),i&&s.width>0&&(i=N(s,s.height,s.width-1,t,r)),i||v(s,t,n)))}(JSON.parse(JSON.stringify(t)),e,0,n),{pathSize:o,animation:n}},y=a(17);function k(t,e,a,n,s){return n[e][a].status!==W&&(n[e][a].status===J&&(n[e][a].parent=[t.height,t.width],s.push(n[e][a])),!0)}function C(t,e,a){for(var n=[];t.status!==U;)n.push([G,e[t.height][t.width]]),t=e[t.parent[0]][t.parent[1]];E=n.length;for(var s=n.length-1;s>=0;s--)a.push(n[s])}var P,B=function(t,e,a){var n=[];return E=0,function(t,e,a,n){var s,i=!0,r=new y;r.push(e);for(;i;)0===r.length?i=!1:(s=r.pop(),t[s.height][s.width].status===W?i=!1:(t[s.height][s.width].status!==U&&(t[s.height][s.width].status=T,n.push([T,t[s.height][s.width]])),i&&s.width+1<t[0].length&&(i=k(s,s.height,s.width+1,t,r)),i&&s.height+1<t.length&&(i=k(s,s.height+1,s.width,t,r)),i&&s.width>0&&(i=k(s,s.height,s.width-1,t,r)),i&&s.height>0&&(i=k(s,s.height-1,s.width,t,r)),i||C(s,t,n)))}(JSON.parse(JSON.stringify(t)),e,0,n),{pathSize:E,animation:n}};function M(t,e,a,n){return Math.abs(a-t)+Math.abs(n-e)}function O(t,e){var a=[],n=e.height,s=e.width;return t[n-1]&&t[n-1][s]&&a.push(t[n-1][s]),t[n+1]&&t[n+1][s]&&a.push(t[n+1][s]),t[n][s-1]&&t[n][s-1]&&a.push(t[n][s-1]),t[n][s+1]&&t[n][s+1]&&a.push(t[n][s+1]),a}function z(t,e,a){for(var n=[];t.status!==U;)n.push([G,e[t.height][t.width]]),t=t.parent;P=n.length;for(var s=n.length-1;s>=0;s--)a.push(n[s])}var j,A=function(t,e,a){var n=[];return P=0,function(t,e,a,n){var s=[];s.push(e);for(;s.length>0;){for(var i=0,r=0;r<s.length;r++)s[r].f<=s[i].f&&(i=r);var o=s[i];if(s.splice(i,1),t[o.height][o.width].status===W)return void z(o.parent,t,n);t[o.height][o.width].status!==U&&(t[o.height][o.width].status=T,n.push([T,t[o.height][o.width]]));for(var h=O(t,o),l=0;l<h.length;l++){var u=h[l];if(u.status!==T&&u.status!==F){var c=o.g+1,d=!1;s.includes(u)?c<u.g&&(d=!0):(d=!0,u.g=c,u.h=M(u.height,u.width,a.height,a.width),s.push(u)),d&&(u.parent=o,u.g=c,u.f=u.g+u.h)}}}}(JSON.parse(JSON.stringify(t)),e,a,n),{pathSize:P,animation:n}};function D(t,e,a,n,s,i){var r=s[a][n];return r.status!==W&&(r.status===J&&(r.status=R,r.parent=[t.height,t.width],r.distance=t.distance+1,s[a][n]=r,i.push(r)),!0)}function I(t,e,a){for(var n=[];t.status!==U;)n.push([G,e[t.height][t.width]]),t=e[t.parent[0]][t.parent[1]];j=n.length;for(var s=n.length-1;s>=0;s--)a.push(n[s])}var x=function(t,e,a){var n=[];return j=0,function(t,e,a,n){var s,i=!0,r=[];r.push(e);for(;i;)if(0===r.length)i=!1;else{for(var o=0,h=0;h<r.length;h++)r[h].distance>r[o].distance&&(o=h);s=r[o],r.splice(o,1),t[s.height][s.width].status===W?i=!1:(t[s.height][s.width].status!==U&&(t[s.height][s.width].status=T,n.push([T,t[s.height][s.width]])),i&&s.height>0&&(i=D(s,a,s.height-1,s.width,t,r)),i&&s.height+1<t.length&&(i=D(s,a,s.height+1,s.width,t,r)),i&&s.width+1<t[0].length&&(i=D(s,a,s.height,s.width+1,t,r)),i&&s.width>0&&(i=D(s,a,s.height,s.width-1,t,r)),i||I(s,t,n))}}(JSON.parse(JSON.stringify(t)),e,a,n),{pathSize:j,animation:n}},F="wall",J="space",U="start",W="target",T="visit",R="gray",G="path",H=function(t){Object(c.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(h.a)(this,a),(n=e.call(this,t)).toggleHamburgerIconClass=function(t){n.setState({isClose:!n.state.isClose})},n.state={grid:[],algorithm:"",nodeSize:25,startPoint:{height:1,width:1},targetPoint:{height:2,width:2},isAlgorithmRun:!1,animations:[],visitedNodesNumber:0,pathNodesNumber:0,showPath:!1,width:window.innerWidth,height:window.innerHeight,clearBoard:!0,speed:25,previousStartNodeStatus:J,previousEndNodeStatus:J,mouseIsPressed:!1,startNodePressed:!1,EndNodePressed:!1,isClose:!0},n.setUpGrid=n.setUpGrid.bind(Object(u.a)(n)),n.updateWindowDimensions=n.updateWindowDimensions.bind(Object(u.a)(n)),n.changeSize=n.changeSize.bind(Object(u.a)(n)),n.runAlgorithm=n.runAlgorithm.bind(Object(u.a)(n)),n.changeBoard=n.changeBoard.bind(Object(u.a)(n)),n.runanimation=n.runanimation.bind(Object(u.a)(n)),n.onMouseDown=n.onMouseDown.bind(Object(u.a)(n)),n.onMouseEnter=n.onMouseEnter.bind(Object(u.a)(n)),n.onMouseUp=n.onMouseUp.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight}),console.log(!this.state.isAlgorithmRun),this.state.isAlgorithmRun||this.setUpGrid(this.state.nodeSize,this.state.clearBoard)}},{key:"setUpGrid",value:function(){var t=Object(f.a)(p.a.mark((function t(e,a){var n,s,i,r,o,h,l,u,c,d;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],r=Math.floor((this.state.height-160)/e),o=Math.floor((this.state.width-50)/e),t.next=5,this.clearpath();case 5:for(h=0,s=0;s<r;s++)for(n[s]=[],i=0;i<o;i++)n[s][i]=new b(++h,s,i,J);if(a)n[5][5].status=U,n[r-5][o-5].status=W,this.setState({targetPoint:n[r-5][o-5],startPoint:n[5][5]});else{for(s=0;s<r;s++)for(i=0;i<o;i++)s%2===0?100*Math.random()<35&&(n[s][i].status=F):100*Math.random()<25&&(n[s][i].status=F);l=Math.floor(Math.random()*(r-1)+1),u=Math.floor(Math.random()*(o-1)+1),c=Math.floor(Math.random()*(r-1)+1),d=Math.floor(Math.random()*(o-1)+1),n[l][u].status=U,n[c][d].status=W,this.setState({targetPoint:n[c][d],startPoint:n[l][u]})}this.setState({grid:n});case 9:case"end":return t.stop()}}),t,this)})));return function(e,a){return t.apply(this,arguments)}}()},{key:"runAlgorithm",value:function(){var t=Object(f.a)(p.a.mark((function t(e,a,n,s,i){var r,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==a){t.next=2;break}return t.abrupt("return");case 2:if(r="BFS"===a?S:"DFS"===a?B:"A* Search"===a?A:"Dijkstra"===a?x:null){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,this.clearpath();case 7:o=r(e,n,s),this.setState({animations:o.animation,isAlgorithmRun:!0,pathNodesNumber:o.pathSize,visitedNodesNumber:o.animation.length-o.pathSize,showPath:!0}),i?this.runanimation(JSON.parse(JSON.stringify(o.animation))):this.changePath(o.animation);case 10:case"end":return t.stop()}}),t,this)})));return function(e,a,n,s,i){return t.apply(this,arguments)}}()},{key:"runanimation",value:function(t){var e=this;t.length?setTimeout((function(){var a=t[0][1];t[0][0]===G?document.getElementById("".concat(a.height,"-").concat(a.width)).className="path-node":document.getElementById("".concat(a.height,"-").concat(a.width)).className="visit-node",t.shift(),e.runanimation(t)}),this.state.speed):setTimeout((function(){e.setState({isAlgorithmRun:!1})}),100)}},{key:"changePath",value:function(t){for(var e=0;e<t.length;e++){var a=t[e][1];t[e][0]===G?document.getElementById("".concat(a.height,"-").concat(a.width)).className="path-node":document.getElementById("".concat(a.height,"-").concat(a.width)).className="visit-node2"}this.setState({isAlgorithmRun:!1})}},{key:"clearpath",value:function(){var t=Object(f.a)(p.a.mark((function t(){var e,a,n,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e=this.state.animations,a=this.state.grid,n=0;n<e.length;n++)s=e[n][1],a[s.height][s.width].status===J&&(document.getElementById("".concat(s.height,"-").concat(s.width)).className="space-node"),a[s.height][s.width].status===F&&(document.getElementById("".concat(s.height,"-").concat(s.width)).className="wall-node"),a[s.height][s.width].h=0,a[s.height][s.width].g=0,a[s.height][s.width].distance=1/0;this.setState({grid:a,animations:[],pathNodesNumber:0,visitedNodesNumber:0,showPath:!1});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"changeBoard",value:function(t){this.setState({clearBoard:t}),this.setUpGrid(this.state.nodeSize,t)}},{key:"changeSize",value:function(t){this.setState({nodeSize:t}),this.setUpGrid(t,this.state.clearBoard)}},{key:"onMouseDown",value:function(t,e){var a=this.state.grid,n=a[t][e];a[t][e].status=n.status===F?J:n.status===J?F:n.status,a[t][e].status===U&&this.setState({startNodePressed:!0}),a[t][e].status===W&&this.setState({EndNodePressed:!0}),this.setState({grid:a,mouseIsPressed:!0})}},{key:"onMouseEnter",value:function(t,e){if(this.state.mouseIsPressed){var a=this.state.grid;if(!this.state.startNodePressed&&!this.state.EndNodePressed){var n=a[t][e];a[t][e].status=n.status===F?J:n.status===J?F:n.status}if(this.state.startNodePressed&&a[t][e].status!==W){var s=this.state.startPoint,i=a[t][e].status;a[s.height][s.width].status=this.state.previousStartNodeStatus,a[t][e].status=U,this.setState({startPoint:a[t][e],previousStartNodeStatus:i}),this.state.showPath&&this.runAlgorithm(a,this.state.algorithm,a[t][e],this.state.targetPoint,!1)}if(this.state.EndNodePressed&&a[t][e].status!==U){var r=this.state.targetPoint,o=a[t][e].status;a[r.height][r.width].status=this.state.previousEndNodeStatus,a[t][e].status=W,this.setState({targetPoint:a[t][e],previousEndNodeStatus:o}),this.state.showPath&&this.runAlgorithm(a,this.state.algorithm,this.state.startPoint,a[t][e],!1)}this.setState({grid:a})}}},{key:"onMouseUp",value:function(){this.state.startNodePressed?this.setState({mouseIsPressed:!1,startNodePressed:!1}):this.state.EndNodePressed?this.setState({mouseIsPressed:!1,EndNodePressed:!1}):this.setState({mouseIsPressed:!1})}},{key:"render",value:function(){var t=this,e=this.state,a=e.grid,n=e.algorithm,i=e.startPoint,r=e.targetPoint,o=e.isAlgorithmRun,h=e.nodeSize,l=e.visitedNodesNumber,u=e.pathNodesNumber,c=e.showPath;return s.a.createElement("div",{className:"mainContainer"},s.a.createElement("div",{className:"main-bar row"},s.a.createElement("div",{className:"hamburger-menu"},s.a.createElement("div",{id:"hamburger-icon",className:this.state.isClose?"":"open",onClick:this.toggleHamburgerIconClass},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))),s.a.createElement("div",{id:"menu",className:this.state.isClose?"":"op"},s.a.createElement("div",{className:"devop"},s.a.createElement("h6",{className:"developed"},"Developed by"),s.a.createElement("h6",{className:"developed"},"Ali Khutaba")),s.a.createElement("div",{className:"social-pic"},s.a.createElement("a",{href:"https://www.linkedin.com/in/ali-khutaba-843627173/",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{className:"linkedin-img",src:"https://www.freepnglogos.com/uploads/linkedin-logo-hd-png-3.png",alt:"Click her"}))),s.a.createElement("div",{className:"social-pic"},s.a.createElement("a",{href:"https://github.com/alikhutaba",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{className:"github-img",src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/2b14985a-c66e-4dbd-b09c-609fe0678dae/d5ariic-ff63c049-4a2e-46bb-bae5-a420d50a4e54.png",alt:"Click her"}))),s.a.createElement("div",{className:"main-button"},s.a.createElement("button",{type:"button",className:"btn btn-outline-primary","data-toggle":"dropdown"},""===n?"Algorithm":n,s.a.createElement("a",{className:"dropdown-toggle"})," "),s.a.createElement("div",{className:"dropdown-menu"},s.a.createElement("button",{onClick:o?null:function(){return t.setState({algorithm:"BFS"})},type:"button",className:" dropdown-item"},s.a.createElement("h6",null,"Breadth First Search (BFS)")),s.a.createElement("button",{onClick:o?null:function(){return t.setState({algorithm:"DFS"})},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Depth First Search (DFS)")),s.a.createElement("button",{onClick:o?null:function(){return t.setState({algorithm:"Dijkstra"})},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Dijkstra Algorithm")),s.a.createElement("button",{onClick:o?null:function(){return t.setState({algorithm:"A* Search"})},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"A* Search")))),s.a.createElement("div",{className:"main-button"},s.a.createElement("button",{type:"button",className:"btn btn-outline-primary","data-toggle":"dropdown"},"Board",s.a.createElement("a",{className:"dropdown-toggle"})),s.a.createElement("div",{className:"dropdown-menu"},s.a.createElement("button",{onClick:o?null:function(){return t.changeBoard(!1)},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Random Maze")),s.a.createElement("button",{onClick:o?null:function(){return t.clearpath()},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Clear Path")),s.a.createElement("button",{onClick:o?null:function(){return t.changeBoard(!0)},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Clear Board")))),s.a.createElement("div",{className:"main-button"},s.a.createElement("button",{type:"button",className:"btn btn-outline-primary","data-toggle":"dropdown"},"Nodes",s.a.createElement("a",{className:"dropdown-toggle"})),s.a.createElement("div",{className:"dropdown-menu"},s.a.createElement("button",{onClick:o?null:function(){return t.changeSize(45)},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Big Nodes")),s.a.createElement("button",{onClick:o?null:function(){return t.changeSize(35)},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Medium Nodes")),s.a.createElement("button",{onClick:o?null:function(){return t.changeSize(25)},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Small Nodes")))),s.a.createElement("div",{className:"main-button"},s.a.createElement("button",{type:"button",className:"btn btn-outline-primary","data-toggle":"dropdown"},"Speed",s.a.createElement("a",{className:"dropdown-toggle"})),s.a.createElement("div",{className:"dropdown-menu"},s.a.createElement("button",{onClick:function(){return t.setState({speed:1})},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Fast")),s.a.createElement("button",{onClick:function(){return t.setState({speed:25})},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Average")),s.a.createElement("button",{onClick:function(){return t.setState({speed:50})},type:"button",className:"dropdown-item"},s.a.createElement("h6",null,"Slow"))))),s.a.createElement("div",{className:"main-button run-button"},s.a.createElement("button",{onClick:o?null:function(){return t.runAlgorithm(a,n,i,r,!0)},style:o?{cursor:"not-allowed"}:null,type:"button",className:" btn btn-outline-danger"},o?n:"Run")),s.a.createElement("div",{className:"info"},s.a.createElement("div",null,s.a.createElement("h6",{className:"info-font"},""===n?"Choose an algorithm":"Algorithm : "+n)),s.a.createElement("div",null,s.a.createElement("h6",{className:"info-font",style:{display:c?"block":"none"}},"Visited ",l," Nodes. Path length"," ",u)))),s.a.createElement("div",{className:"col-sm-12",id:"mainBoardID"},a.map((function(e,a){return s.a.createElement("div",{key:a},e.map((function(e,n){return s.a.createElement("div",{id:"".concat(a,"-").concat(n),key:n,className:e.status===J?"space-node":e.status===F?"wall-node":e.status===T?"visit-node":e.status===G?"path-node":e.status===U?"start-node":e.status===W?"target-node":"space-node",style:{height:h+"px",width:h+"px"},onMouseDown:o?null:function(){return t.onMouseDown(a,n)},onMouseEnter:o?null:function(){return t.onMouseEnter(a,n)},onMouseUp:o?null:function(){return t.onMouseUp()}})})))}))))}}]),a}(s.a.Component);r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(m,null),s.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.2f70f8f3.chunk.js.map