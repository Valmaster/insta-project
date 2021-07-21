import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PublicationRepository } from './publication.repository';
import { User } from '../auth/user.entity';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { Publication } from './publication.entity';

@Injectable()
export class PublicationService {
  constructor(
    @InjectRepository(PublicationRepository)
    private publicationRepository: PublicationRepository,
  ) {}

  async getPublications(): Promise<Publication[]> {
    return await this.publicationRepository.getPublications();
  }

  async getPublicationById(id: number): Promise<Publication> {
    const publication = await this.publicationRepository.findOne(id);

    if (!publication) {
      throw new NotFoundException(`Publication with ${id} not found.`);
    }

    return publication;
  }

  async createPublication(
    createPublicationDto: CreatePublicationDto,
    user: User,
  ): Promise<Publication> {
    return this.publicationRepository.createPublication(
      createPublicationDto,
      user,
    );
  }

  async updatePublication(
    id: number,
    updatePublicationDto: UpdatePublicationDto,
  ): Promise<Publication> {
    const publication = await this.getPublicationById(id);
    return this.publicationRepository.updatePublication(
      publication,
      updatePublicationDto,
    );
  }

  async deletePublication(id: number): Promise<void> {
    const result = await this.publicationRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Publication with ${id} not found.`);
    }
  }
}
