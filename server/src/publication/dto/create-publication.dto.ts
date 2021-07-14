import { IsNotEmpty } from 'class-validator';

export class CreatePublicationDto {
  @IsNotEmpty()
  description: string;
}
