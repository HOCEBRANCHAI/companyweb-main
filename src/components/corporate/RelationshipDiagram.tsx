import React, { useCallback, useEffect } from 'react';
import { ReactFlow, Background, Controls, MiniMap, Node, Edge, useNodesState, useEdgesState, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { BuildingIcon, GlobeIcon } from 'lucide-react';
interface RelationshipDiagramProps {
  companies: any[];
  relationships: any[];
}
const nodeTypes = {
  base: ({
    data
  }) => <div className="bg-white border-2 border-blue-500 rounded-lg p-4 shadow-lg">
      <div className="flex items-center space-x-2">
        <BuildingIcon className="h-5 w-5 text-blue-500" />
        <span className="font-medium">{data.label}</span>
      </div>
      <div className="text-xs text-gray-500 mt-1">{data.country}</div>
    </div>,
  target: ({
    data
  }) => <div className="bg-white border-2 border-green-500 rounded-lg p-4 shadow-lg">
      <div className="flex items-center space-x-2">
        <GlobeIcon className="h-5 w-5 text-green-500" />
        <span className="font-medium">{data.label}</span>
      </div>
      <div className="text-xs text-gray-500 mt-1">{data.country}</div>
    </div>,
  custom: ({
    data
  }) => <div className="bg-white border-2 border-gray-500 rounded-lg p-4 shadow-lg">
      <div className="flex items-center space-x-2">
        <BuildingIcon className="h-5 w-5 text-gray-500" />
        <span className="font-medium">{data.label}</span>
      </div>
      <div className="text-xs text-gray-500 mt-1">{data.country}</div>
    </div>
};
export function RelationshipDiagram({
  companies,
  relationships
}: RelationshipDiagramProps) {
  // Convert companies to nodes
  const createNodes = () => companies.map((company, index) => ({
    id: company.id,
    type: company.type,
    position: {
      x: 100 + index * 200,
      y: 100 + index % 2 * 100
    },
    data: {
      label: company.name,
      country: company.country
    }
  }));
  // Convert relationships to edges
  const createEdges = () => relationships.map((rel, index) => ({
    id: `e${index}`,
    source: rel.sourceId,
    target: rel.targetId,
    label: rel.type + (rel.percentage ? ` (${rel.percentage}%)` : ''),
    type: 'smoothstep',
    animated: true,
    style: {
      stroke: rel.type === 'shareholding' ? '#3B82F6' : rel.type === 'royalty' ? '#10B981' : '#6366F1'
    }
  }));
  const [nodes, setNodes, onNodesChange] = useNodesState(createNodes());
  const [edges, setEdges, onEdgesChange] = useEdgesState(createEdges());
  // Update nodes and edges when companies or relationships change
  useEffect(() => {
    setNodes(createNodes());
    setEdges(createEdges());
  }, [companies, relationships]);
  const onConnect = useCallback(params => {
    setEdges(eds => addEdge(params, eds));
  }, [setEdges]);
  return <div className="h-[600px] border border-gray-200 rounded-lg bg-gray-50">
      <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} nodeTypes={nodeTypes} fitView>
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>;
}