import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../auth/user.entity';

@Entity('user_followers')
export class UserFollower extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'number' })
  // tslint:disable-next-line: variable-name
  following_id: number;

  @Column({ type: 'number' })
  // tslint:disable-next-line: variable-name
  follower_id: number;

  @ManyToOne((type) => User, (user) => user.followers, { eager: false })
  @JoinColumn({ name: 'follower_id' })
  followers: User;

  @ManyToOne((type) => User, (user) => user.following, { eager: false })
  @JoinColumn({ name: 'following_id' })
  following: User;
}
