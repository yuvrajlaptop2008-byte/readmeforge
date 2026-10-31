'use client';

import { Text } from '#/components/atoms/text';
import { MonoForgeMonkeyIcon } from '#/components/common/MonoForgeLogo';

export function FooterOwner() {
  return (
    <div className="hidden h-full shrink-0 gap-sm desktop:flex items-center">
      <div className="size-8 self-center p-0.5 rounded-lg border border-neutral-900 bg-white shadow-2xs overflow-hidden flex items-center justify-center">
        <MonoForgeMonkeyIcon className="w-full h-full" />
      </div>

      <div className="flex flex-col h-full justify-center">
        <Text.Strong>MonoForge</Text.Strong>
        <Text.Small className="not-italic">
          Forge a GitHub profile that gets noticed.{' '}
          <Text.Link
            href="https://github.com/monoforge/MONOFORGE"
            target="_blank"
            rel="noreferrer"
            className="text-xs"
          >
            GitHub
          </Text.Link>
        </Text.Small>
      </div>
    </div>
  );
}
