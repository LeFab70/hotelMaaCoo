import { Component, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  LucideMessageCircle,
  LucideX,
  LucideSend,
  LucidePhone,
  LucideMail,
} from '@lucide/angular';
import { CHAT_QUICK_QUESTIONS } from '../../core/chat.data';
import { ChatbotService } from '../../core/chatbot.service';
import { HotelService } from '../../core/hotel.service';

interface ChatMessage {
  from: 'bot' | 'user';
  text: string;
  showContact?: boolean;
}

@Component({
  selector: 'app-chatbot',
  imports: [
    FormsModule,
    RouterLink,
    LucideMessageCircle,
    LucideX,
    LucideSend,
    LucidePhone,
    LucideMail,
  ],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss',
})
export class Chatbot {
  @ViewChild('thread') thread?: ElementRef<HTMLDivElement>;

  private readonly chat = inject(ChatbotService);
  readonly hotelService = inject(HotelService);

  readonly open = signal(false);
  readonly draft = signal('');
  readonly quick = CHAT_QUICK_QUESTIONS;
  readonly messages = signal<ChatMessage[]>([
    {
      from: 'bot',
      text: "Bonjour. Je suis l’assistant MA'ACO. Posez une question sur nos hôtels, tarifs ou services — je réponds à partir des infos du site.",
    },
  ]);

  toggle(): void {
    this.open.update((v) => !v);
  }

  close(): void {
    this.open.set(false);
  }

  askQuick(question: string): void {
    this.send(question);
  }

  submit(event?: Event): void {
    event?.preventDefault();
    this.send(this.draft());
  }

  private send(text: string): void {
    const value = text.trim();
    if (!value) return;

    this.messages.update((list) => [...list, { from: 'user', text: value }]);
    this.draft.set('');

    // Bot replies after the user message is shown
    const reply = this.chat.answer(value);
    window.setTimeout(() => {
      this.messages.update((list) => [
        ...list,
        {
          from: 'bot',
          text: reply.text,
          showContact: !reply.matched,
        },
      ]);
      this.scrollBottom();
    }, 280);

    this.scrollBottom();
  }

  private scrollBottom(): void {
    queueMicrotask(() => {
      const el = this.thread?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    });
  }
}
