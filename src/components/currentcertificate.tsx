import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CurrentCertificate() {
  const currentCertificates = [
    {
      Name: "Certificate of Completion in Data Science",
      Issuer: "Coursera",
      IssueDate: "2021-09-01",
      ExpiryDate: "2022-09-01",
      CredentialID: "123456789",
      CredentialURL: "https://www.coursera.org/account/accomplishments/certificate/123456789",
    },
    {
      Name: "Certificate of Completion in Web Development",
      Issuer: "Udemy",
      IssueDate: "2021-12-01",
      ExpiryDate: "2022-12-01",
      CredentialID: "987654321",
      CredentialURL: "https://www.udemy.com/certificate/987654321",
    },
    {
      Name: "Certificate of Completion in Machine Learning",
      Issuer: "edX",
      IssueDate: "2020-07-01",
      ExpiryDate: "2021-07-01",
      CredentialID: "1122334455",
      CredentialURL: "https://www.edx.org/certificate/1122334455",
    },
    {
      Name: "Certificate of Completion in Machine Learning",
      Issuer: "edX",
      IssueDate: "2020-07-01",
      ExpiryDate: "2021-07-01",
      CredentialID: "1122334455",
      CredentialURL: "https://www.edx.org/certificate/1122334455",
    },
    {
      Name: "Certificate of Completion in Machine Learning",
      Issuer: "edX",
      IssueDate: "2020-07-01",
      ExpiryDate: "2021-07-01",
      CredentialID: "1122334455",
      CredentialURL: "https://www.edx.org/certificate/1122334455",
    },
    {
      Name: "Certificate of Completion in Machine Learning",
      Issuer: "edX",
      IssueDate: "2020-07-01",
      ExpiryDate: "2021-07-01",
      CredentialID: "1122334455",
      CredentialURL: "https://www.edx.org/certificate/1122334455",
    },
    {
      Name: "Certificate of Completion in Machine Learning",
      Issuer: "edX",
      IssueDate: "2020-07-01",
      ExpiryDate: "2021-07-01",
      CredentialID: "1122334455",
      CredentialURL: "https://www.edx.org/certificate/1122334455",
    },
    

  ];

  return (
    <div className="relative">
      <div className="overflow-x-auto flex space-x-4 scrollbar-hide py-4">
        {currentCertificates.map((certificate, index) => (
          <div key={index} className="min-w-[300px] flex-shrink-0">
            <Card className="bg-gray-900 border-gray-800 shadow-md">
              <CardHeader>
                <CardTitle className="text-blue-400">{certificate.Name}</CardTitle>
                <CardDescription className="text-gray-400">Issued by {certificate.Issuer}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-gray-100 mb-4">
                  <strong>Issue Date:</strong> {certificate.IssueDate}
                </p>
                <p className="text-lg font-medium text-gray-100 mb-4">
                  <strong>Expiry Date:</strong> {certificate.ExpiryDate}
                </p>
                <p className="text-lg font-medium text-gray-100 mb-4">
                  <strong>Credential ID:</strong> {certificate.CredentialID}
                </p>
                <a
                  href={certificate.CredentialURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:underline"
                >
                  View Certificate
                </a>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
