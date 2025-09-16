import { DataImportOptions as SharedDataImportOptions } from '../../common/DataImportOptions';

interface DataImportOptionsProps {
  onSelectMethod: (method: 'base' | 'upload' | 'target') => void;
}

export function DataImportOptions({
  onSelectMethod
}: DataImportOptionsProps) {
  return (
    <SharedDataImportOptions
      onSelectMethod={onSelectMethod}
      availableMethods={['base', 'upload', 'target']}
      context="vatid"
    />
  );
}