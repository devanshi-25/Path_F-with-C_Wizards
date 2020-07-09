var Util = require('../core/Util');
var DiagonalMovement = require('../core/DiagonalMovement');

/**
 * Depth-First-Search path finder.
 * @constructor
 * @param {Object} opt
 * @param {boolean} opt.allowDiagonal Whether diagonal movement is allowed.
 *     Deprecated, use diagonalMovement instead.
 * @param {boolean} opt.dontCrossCorners Disallow diagonal movement touching
 *     block corners. Deprecated, use diagonalMovement instead.
 * @param {DiagonalMovement} opt.diagonalMovement Allowed diagonal movement.
 */
function bellmanFord(opt) {
    opt = opt || {};
    this.allowDiagonal = opt.allowDiagonal;
    this.dontCrossCorners = opt.dontCrossCorners;
    this.diagonalMovement = opt.diagonalMovement;

    if (!this.diagonalMovement) {
        if (!this.allowDiagonal) {
            this.diagonalMovement = DiagonalMovement.Never;
        } else {
            if (this.dontCrossCorners) {
                this.diagonalMovement = DiagonalMovement.OnlyWhenNoObstacles;
            } else {
                this.diagonalMovement = DiagonalMovement.IfAtMostOneObstacle;
            }
        }
    }
}

 bellmanFord(){
      if(this.i == -1){
        this.nodes[this.si][this.sj].distance = 0;
        this.i++;
      }
      if(this.i >= 0){
        if(this.i < 22*38 - 1){
        for(let j = 0; j < this.edges.length; j++){
          if(this.i == 0){
            if(document.getElementById(this.edges[j].nodef.name).className != "sd"){
              // this.visitedNodes = this.visitedNodes.concat(this.edges[j].nodef.name);
              this.visitedNodes = this.visitedNodes.concat([this.edges[j].nodef.name]);
              // document.getElementById(this.edges[j].nodef.name).className = "visited";
            }
            if(document.getElementById(this.edges[j].nodet.name).className != "sd"){
              this.visitedNodes = this.visitedNodes.concat([this.edges[j].nodet.name]);
              // this.visitedNodes = this.visitedNodes.concat(this.edges[j].nodet.name);
              // document.getElementById(this.edges[j].nodet.name).className = "visited";
            }
          }
          
          if(this.edges[j].nodef.distance + 1 < this.edges[j].nodet.distance){
            this.edges[j].nodet.distance = this.edges[j].nodef.distance + 1;
            
                this.path[this.edges[j].nodet.pi][this.edges[j].nodet.pj] = [this.edges[j].nodet];
                this.path[this.edges[j].nodet.pi][this.edges[j].nodet.pj] = this.path[this.edges[j].nodet.pi][this.edges[j].nodet.pj].concat(this.path[this.edges[j].nodef.pi][this.edges[j].nodef.pj]);
              
          }
    }