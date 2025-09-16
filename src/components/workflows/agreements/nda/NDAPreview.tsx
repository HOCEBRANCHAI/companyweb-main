import React from 'react';
import { FileTextIcon, DownloadIcon, ArrowLeftIcon, ArrowRightIcon, PrinterIcon } from 'lucide-react';
interface NDAPreviewProps {
  formData: any;
  onContinue: () => void;
  onBack: () => void;
}
export function NDAPreview({
  formData,
  onContinue,
  onBack
}: NDAPreviewProps) {
  // Function to format the confidential information list
  const formatConfidentialInfo = () => {
    let infoList = [...formData.confidentialInformation];
    if (formData.customConfidentialInformation) {
      infoList.push(formData.customConfidentialInformation);
    }
    return infoList.join(', ');
  };
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Preview Agreement</h3>
        <div className="flex space-x-2">
          <button type="button" className="px-3 py-1 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
            <PrinterIcon className="mr-2 h-4 w-4" />
            Print
          </button>
          <button type="button" className="px-3 py-1 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
            <DownloadIcon className="mr-2 h-4 w-4" />
            Download
          </button>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6 max-h-[60vh] overflow-y-auto">
        <div className="prose prose-sm max-w-none">
          <h1 className="text-center text-xl font-bold">
            NON-DISCLOSURE AGREEMENT
          </h1>
          <p>
            <strong>THIS AGREEMENT</strong> is made on{' '}
            {formData.effectiveDate ? new Date(formData.effectiveDate).toLocaleDateString() : '[Date]'}
          </p>
          <p>
            <strong>BETWEEN:</strong>
          </p>
          <ol>
            <li>
              <strong>
                {formData.disclosingPartyName || '[Disclosing Party Name]'}
              </strong>
              , with its registered office at{' '}
              {formData.disclosingPartyAddress || '[Address]'}, represented by{' '}
              {formData.disclosingPartyRepresentative || '[Representative Name]'}{' '}
              (the "<strong>Disclosing Party</strong>"); and
            </li>
            <li>
              <strong>
                {formData.receivingPartyName || '[Receiving Party Name]'}
              </strong>
              , with its registered office at{' '}
              {formData.receivingPartyAddress || '[Address]'}, represented by{' '}
              {formData.receivingPartyRepresentative || '[Representative Name]'}{' '}
              (the "<strong>Receiving Party</strong>").
            </li>
          </ol>
          <p>
            The Disclosing Party and the Receiving Party are collectively
            referred to as the "<strong>Parties</strong>" and individually as a
            "<strong>Party</strong>".
          </p>
          <p>
            <strong>WHEREAS:</strong>
          </p>
          <ol type="A">
            <li>
              The Parties wish to engage in discussions regarding{' '}
              {formData.purpose || '[Purpose of Disclosure]'} (the "
              <strong>Purpose</strong>"); and
            </li>
            <li>
              In connection with the Purpose, the Disclosing Party may disclose
              certain confidential and proprietary information to the Receiving
              Party.
            </li>
          </ol>
          <p>
            <strong>NOW, THEREFORE</strong>, in consideration of the mutual
            covenants contained herein, the Parties agree as follows:
          </p>
          <h2>1. CONFIDENTIAL INFORMATION</h2>
          <p>
            1.1 "Confidential Information" means any information disclosed by
            the Disclosing Party to the Receiving Party, either directly or
            indirectly, in writing, orally or by inspection of tangible objects,
            including but not limited to{' '}
            {formatConfidentialInfo() || '[Types of Confidential Information]'}.
          </p>
          <p>
            1.2 Confidential Information shall not include information that:
          </p>
          <ol type="a">
            <li>was in the public domain at the time it was disclosed;</li>
            <li>
              becomes part of the public domain after disclosure through no
              fault of the Receiving Party;
            </li>
            <li>
              was known to the Receiving Party prior to disclosure by the
              Disclosing Party;
            </li>
            <li>
              is lawfully obtained by the Receiving Party from a third party
              without restriction on disclosure; or
            </li>
            <li>
              is independently developed by the Receiving Party without use of
              the Confidential Information.
            </li>
          </ol>
          <h2>2. OBLIGATIONS OF THE RECEIVING PARTY</h2>
          <p>2.1 The Receiving Party shall:</p>
          <ol type="a">
            <li>
              maintain the confidentiality of the Confidential Information;
            </li>
            <li>
              not disclose any Confidential Information to any person or entity
              without the prior written consent of the Disclosing Party;
            </li>
            <li>use the Confidential Information only for the Purpose;</li>
            <li>
              take all reasonable measures to protect the secrecy of and avoid
              disclosure or use of Confidential Information; and
            </li>
            <li>
              notify the Disclosing Party in writing of any unauthorized use or
              disclosure of the Confidential Information.
            </li>
          </ol>
          <p>
            2.2 The Receiving Party may disclose Confidential Information to its
            employees, directors, agents, or advisors who need to know such
            information for the Purpose, provided that such persons are bound by
            confidentiality obligations no less restrictive than those contained
            herein.
          </p>
          <h2>3. TERM AND TERMINATION</h2>
          <p>
            3.1 The obligations of the Receiving Party under this Agreement
            shall survive for a period of{' '}
            {formData.terminationPeriod || '[Period]'} from the date of
            disclosure of the Confidential Information.
          </p>
          <h2>4. GOVERNING LAW AND JURISDICTION</h2>
          <p>
            4.1 This Agreement shall be governed by and construed in accordance
            with the laws of {formData.governingLaw || '[Jurisdiction]'}.
          </p>
          <p>
            4.2 Any dispute arising out of or in connection with this Agreement
            shall be resolved through{' '}
            {formData.disputeResolution === 'courts' ? 'the competent courts of ' + formData.governingLaw : formData.disputeResolution === 'arbitration' ? 'arbitration in ' + (formData.arbitrationLocation || '[Location]') : 'mediation first, and if unsuccessful, through the competent courts of ' + formData.governingLaw}
            .
          </p>
          {formData.includeNonSolicitation && <>
              <h2>5. NON-SOLICITATION</h2>
              <p>
                5.1 During the term of this Agreement and for a period of{' '}
                {formData.nonSolicitationPeriod || '[Period]'} thereafter,
                neither Party shall, directly or indirectly, solicit or attempt
                to solicit any employee, consultant, or client of the other
                Party without the prior written consent of the other Party.
              </p>
            </>}
          {formData.includeNonCompete && <>
              <h2>
                {formData.includeNonSolicitation ? '6' : '5'}. NON-COMPETITION
              </h2>
              <p>
                {formData.includeNonSolicitation ? '6.1' : '5.1'} During the
                term of this Agreement and for a period of{' '}
                {formData.nonCompetePeriod || '[Period]'} thereafter, the
                Receiving Party shall not engage in any business activity that
                directly competes with the business of the Disclosing Party
                without the prior written consent of the Disclosing Party.
              </p>
            </>}
          <h2>
            {(formData.includeNonSolicitation ? 1 : 0) + (formData.includeNonCompete ? 1 : 0) + 5}
            . GENERAL PROVISIONS
          </h2>
          <p>
            {(formData.includeNonSolicitation ? 1 : 0) + (formData.includeNonCompete ? 1 : 0) + 5}
            .1 This Agreement constitutes the entire agreement between the
            Parties with respect to the subject matter hereof and supersedes all
            prior agreements and understandings, whether written or oral.
          </p>
          <p>
            {(formData.includeNonSolicitation ? 1 : 0) + (formData.includeNonCompete ? 1 : 0) + 5}
            .2 This Agreement may not be amended except by a written instrument
            signed by both Parties.
          </p>
          <p>
            {(formData.includeNonSolicitation ? 1 : 0) + (formData.includeNonCompete ? 1 : 0) + 5}
            .3 If any provision of this Agreement is found to be unenforceable,
            the remainder shall be enforced as fully as possible and the
            unenforceable provision shall be deemed modified to the limited
            extent required to permit its enforcement in a manner most closely
            representing the intention of the Parties as expressed herein.
          </p>
          <p className="mt-8">
            <strong>IN WITNESS WHEREOF</strong>, the Parties have executed this
            Agreement as of the date first above written.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div>
              <p>
                <strong>For and on behalf of the Disclosing Party:</strong>
              </p>
              <p className="mt-8">____________________________</p>
              <p>
                Name:{' '}
                {formData.disclosingPartyRepresentative || '[Representative Name]'}
              </p>
              <p>Title: </p>
              <p>Date: </p>
            </div>
            <div>
              <p>
                <strong>For and on behalf of the Receiving Party:</strong>
              </p>
              <p className="mt-8">____________________________</p>
              <p>
                Name:{' '}
                {formData.receivingPartyRepresentative || '[Representative Name]'}
              </p>
              <p>Title: </p>
              <p>Date: </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-6">
        <button type="button" onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </button>
        <button type="button" onClick={onContinue} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
          Continue to Signing
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>;
}