import { RequirementsOverview as SharedRequirementsOverview } from '../../common/RequirementsOverview';

interface RequirementsOverviewProps {
  onContinue: () => void;
}

export function RequirementsOverview({
  onContinue
}: RequirementsOverviewProps) {
  return (
    <SharedRequirementsOverview
      onContinue={onContinue}
      context="branch"
    />
  );
}