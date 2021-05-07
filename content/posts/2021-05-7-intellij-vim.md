+++
categories = ["vim", "neovim", "intellij"]
date = "2021-05-07"
title = "Vim-like keybindings with IntelliJ and friends"
type = "post"
+++

[JetBrain's IntelliJ IDEA](https://www.jetbrains.com/idea/) is a great IDE for Java development. Here are my keybindings to make it like my [Neovim configuration](https://github.com/gnuyent/dotfiles).

## IntelliJ Configuration

1. Install and enable the IdeaVim plugin.

Inside `File -> Settings -> Keymap`:
* Copy the 'Windows' preset and name it something (optional), mine is `VIM`.
* `Choose Lookup Item Replace` unbind.
* `Down` to `Down`, `Tab`, and `Ctrl+J`
* `Up` to `Up`, `Shift+Tab`, and `Ctrl+K`
* Optional: `Search Everywhere` to `Ctrl+Shift+P`

Tab-complete with `Tab` (scroll down) and `Shift+Tab` (scroll up). To select the completion, use the `Enter` key.

In most IntelliJ GUI windows, you can scroll down using `Tab` and `Ctrl+J`. You can scroll up using `Shift+Tab` and `Ctrl+K`.

## .ideavimrc Configuration

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
