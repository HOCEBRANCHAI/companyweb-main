import { RequirementsOverview as SharedRequirementsOverview } from '../../common/RequirementsOverview';

interface RequirementsOverviewProps {
  onContinue: () => void;
  onSelectImportMethod: (method: 'target' | 'base' | 'upload') => void;
}

export function RequirementsOverview({
  onContinue,
  onSelectImportMethod
}: RequirementsOverviewProps) {
  return (
    <SharedRequirementsOverview
      onContinue={onContinue}
      onSelectImportMethod={onSelectImportMethod}
      context="registration"
    />
  );
}