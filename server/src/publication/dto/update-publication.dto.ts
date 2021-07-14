import { IsNotEmpty } from 'class-validator';

export class UpdatePublicationDto {
  @IsNotEmpty()
  description: string;
}
