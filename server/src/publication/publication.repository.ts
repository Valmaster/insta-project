import { EntityRepository, Repository } from 'typeorm';
import { User } from '../auth/user.entity';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { Publication } from './publication.entity';

@EntityRepository(Publication)
export class PublicationRepository extends Repository<Publication> {
  async getPublications(): Promise<Publication[]> {
    const query = this.createQueryBuilder('publication');
    return await query.getMany();
    /*    const query = this.createQueryBuilder('publication');

    query.where('publication.userId = :userId', { userId: user.id });

    return await query.getMany();*/
  }

  async createPublication(
    createPublicationDto: CreatePublicationDto,
    user: User,
  ): Promise<Publication> {
    const { description } = createPublicationDto;

    const publication = new Publication();
    publication.description = description;
    publication.user = user;
    await publication.save();

    return publication;
  }

  async updatePublication(
    publication: Publication,
    updatePublicationDto: UpdatePublicationDto,
  ): Promise<Publication> {
    const { description } = updatePublicationDto;

    publication.description = description;
    await publication.save();

    return publication;
  }
}
