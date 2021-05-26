+++
categories = ["vim", "neovim", "intellij"]
date = "2021-05-07"
title = "Vim-like settings for IntelliJ"
type = "post"
+++

To me, it's important to be efficient in simple tasks so I can focus on bigger problems. Vim (and its keybindings) lets me edit text quickly and efficently (simple task) so that I can focus on designing and engineering software (hard task).

[JetBrain's IntelliJ IDEA](https://www.jetbrains.com/idea/) is a great IDE for Java development that is missing one thing: a Vim-like editor. With its wonderful [IdeaVim](https://github.com/JetBrains/ideavim) plugin, we can get the power of a fantastic IDE and editor.

## Configuring IntelliJ

First, we need to configure some things within IntelliJ.

For plugins, we need to install and enable the [IdeaVim](https://github.com/JetBrains/ideavim) plugin.

Then, inside `File -> Settings -> Keymap`:
* Copy the 'Windows' preset and name it something, mine is `VIM`.
* `Choose Lookup Item Replace` unbind.
* `Down` to `Down`, `Tab`, and `Ctrl+J`
* `Up` to `Up`, `Shift+Tab`, and `Ctrl+K`
* Optional: `Search Everywhere` to `Ctrl+Shift+P`

Now, we can tab-complete using `Tab` (scroll down) and `Shift+Tab` (scroll up). To select the completion, use the `Enter` key.

In most IntelliJ GUI windows, we can scroll down using `Tab` and `Ctrl+J`. You can scroll up using `Shift+Tab` and `Ctrl+K`.

## Configuring .ideavimrc

On the bottom toolbar, click the IdeaVim icon and click `Open ~/.ideavimrc`. Most of your Vim(script) settings can be copy and pasted here.

```vimscript
let mapleader=" "

" Plugins
set NERDTree
set ideajoin

" NERDTree Plugins
nmap <leader>op :NERDTreeToggle<CR>

" Relative line numbers
set number relativenumber

" Copy to system clipboard
set clipboard+=unnamed

" Better window navigation
nmap <C-h> <c-w>h
nmap <C-j> <c-w>j
nmap <C-k> <c-w>k
nmap <C-l> <c-w>l

" Refactoring
nmap <leader>rn :action RenameElement<CR>
nmap <leader>ca :action ShowIntentionActions<CR>
nmap <leader>f :action ReformatCode<CR>

" Terminal
nmap <leader>ot :action ActivateTerminalToolWindow<CR>
```

The `:action` command is unique to IdeaVim. To see all bindable actions, use the command `:actionlist`. I used 
[this website](https://codecode.fun/blog/2020/01/05/idea-actions-list) as a reference.

## References

Thanks to the following for guidance:

* [dewaka/.ideavimrc](https://gist.github.com/dewaka/ef947e52767bf453eaf77c852051eb7e)
* [IdeaVim's NERDTree Bindings](https://github.com/JetBrains/ideavim/wiki/NERDTree-support)
* [IDEA Actions List](https://codecode.fun/blog/2020/01/05/idea-actions-list)
