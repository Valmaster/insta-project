import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicationRepository } from './publication.repository';
import { AuthModule } from '../auth/auth.module';
import { PublicationController } from './publication.controller';
import { PublicationService } from './publication.service';

@Module({
  imports: [TypeOrmModule.forFeature([PublicationRepository]), AuthModule],
  controllers: [PublicationController],
  providers: [PublicationService],
})
export class PublicationModule {}
