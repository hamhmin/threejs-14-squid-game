import { Mesh } from "three";
import { Stuff } from "./stuff";
import { cm1, geo, mat } from "./common";

export class Pillar extends Stuff{
    // 막대기
    constructor(info){
        super(info);

        this.geometry = geo.pillar;
        this.material = mat.pillar;

        this.mesh = new Mesh(this.geometry,this.material);
        this.mesh.position.set(this.x,this.y,this.z)
		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;
        cm1.scene.add(this.mesh);
    }
}