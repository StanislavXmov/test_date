import { useAnimations, useGLTF } from '@react-three/drei';
import { Ref, useEffect } from 'react'
import { AnimationClip, Bone, BufferGeometry, Material, Mesh, MeshStandardMaterial, NormalBufferAttributes, SkinnedMesh } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

interface CharacterGLTF extends GLTF {
  nodes: {
    mixamorigHips: Bone;
    Cube: SkinnedMesh;
    table: Mesh;
  }
  materials: {
    'Material': MeshStandardMaterial;
    '': MeshStandardMaterial;
  }
  animation: AnimationClip[]
};

export const CModel = () => {
  const model = useGLTF('./xmov.glb') as unknown as CharacterGLTF;
  
  const { ref, actions } = useAnimations(model.animations);
  
  useEffect(() => {
    actions?.ArmatureAction?.play();    
  });
  
  return (
    <group dispose={null} userData={{type: 'player'}} >
      <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.001} position={[0, -4, -4]}>
        <primitive object={model.nodes.mixamorigHips} />
        <skinnedMesh 
          ref={ref as Ref<SkinnedMesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]>>}
          castShadow 
          name="Cube" 
          frustumCulled={false} 
          geometry={model.nodes.Cube.geometry}
          skeleton={model.nodes.Cube.skeleton} 
          material={model.materials['Material']} 
        />
      </group>
      <mesh geometry={model.nodes.table.geometry} material={model.materials['']} scale={10} position={[0, -13.5, -2]} />
    </group>
  )
}
