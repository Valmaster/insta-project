import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CommentService } from './comment.service';

@Controller('comments')
@UseGuards(AuthGuard())
export class CommentController {
  constructor(private commentService: CommentService) {}
}
