"use strict";function List(){this.dataStore=[],this.listSize=0,this.pos=0}function contains(t){for(var i=0;i<this.dataStore.length;i++)if(this.dataStore[i]===t)return!0;return!1}List.prototype.add=function(t){this.dataStore[this.listSize++]=t},List.prototype.find=function(t){for(var i=0;i<this.dataStore.length;i++)if(t===this.dataStore[i])return i;return-1},List.prototype.remove=function(t){var i=this.find(t);return-1<i&&(this.dataStore.splice(i,1),this.listSize--,!0)},List.prototype.clear=function(){this.dataStore=[],this.listSize=0},List.prototype.toString=function(){return this.dataStore},List.prototype.insert=function(t,i){var s=this.find(i);return-1<s&&(this.dataStore.splice(s+1,0,t),this.listSize++,!0)},List.prototype.front=function(){this.pos=0},List.prototype.end=function(){this.pos=this.listSize-1},List.prototype.prev=function(){0<this.pos&&--this.pos},List.prototype.next=function(){this.pos<this.listSize-1&&++this.pos},List.prototype.currPos=function(){return this.pos},List.prototype.moveTo=function(t){this.pos=t},List.prototype.getElement=function(){return this.dataStore[this.pos]};var names=new List;names.add("早晨"),names.add("中午"),names.add("下午"),names.add("晚上"),names.add("凌晨"),names.front(),console.log(names.getElement()),names.next(),console.log(names.getElement());