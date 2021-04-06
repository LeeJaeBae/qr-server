import User from './User';
import Message from './Message';
import { BaseEntity, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
class Chat extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @OneToMany(type => User, user => user.chat)
  participants: User[];

  @OneToMany(type => Message, message => message.chat)
  messages: Message[];

  @CreateDateColumn() createAt: string;
  @UpdateDateColumn() updateAt: string;
}

export default Chat;
