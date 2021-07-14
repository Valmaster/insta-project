import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @ManyToOne(() => UserEntity, (u: UserEntity) => u.followers)
  @JoinColumn({ name: 'follower_id' })
  followers: UserEntity;

  @ManyToOne((type) => UserEntity, (u: UserEntity) => u.following)
  @JoinColumn({ name: 'following_id' })
  following: UserEntity;
}
