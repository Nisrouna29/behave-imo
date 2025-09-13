export interface DossierData {
  propertyId: number;
  propertyTitle: string;
  propertyAddress: string;
  propertyPrice: string;
  propertyType: string;
  progress: number;

  identity: {
    idNumber: string;
    idDocument: File[];
    addressDocument: File[];
  };

  financial: {
    monthlySalary: string;
    contractType: string;
    salaryDocuments: File[];
    bankDocuments: File[];
  };

  professional: {
    employerName: string;
    position: string;
    employerDocument: File[];
  };
}

export interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  file: File;
  uploadedAt: Date;
}
