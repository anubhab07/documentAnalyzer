import { ICoordinates} from './ICoordinates';

export interface IFormData {
  pageNo: number;
  dataLabel: string;
  dataValue: string;
  dataType: string;
  coordinates: ICoordinates;
}
