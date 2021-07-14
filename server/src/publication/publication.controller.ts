import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  ParseIntPipe,
  UseGuards,
  ValidationPipe,
  UsePipes,
  Body,
  Delete,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PublicationService } from './publication.service';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '../auth/user.entity';
import { Publication } from './publication.entity';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';

@Controller('publications')
@UseGuards(AuthGuard())
export class PublicationController {
  constructor(private publicationService: PublicationService) {}

  @Get()
  getPublications(@GetUser() user: User): Promise<Publication[]> {
    return this.publicationService.getPublications(user);
  }

  @Get('/:id')
  getPublicationById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Publication> {
    return this.publicationService.getPublicationById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createPublication(
    @Body() createPublicationDto: CreatePublicationDto,
    @GetUser() user: User,
  ): Promise<Publication> {
    return this.publicationService.createPublication(
      createPublicationDto,
      user,
    );
  }

  @Patch('/:id')
  updatePublication(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePublicationDto: UpdatePublicationDto,
  ): Promise<Publication> {
    return this.publicationService.updatePublication(id, updatePublicationDto);
  }

  @Delete('/:id')
  deletePublication(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<void> {
    return this.publicationService.deletePublication(id, user);
  }
}
