#!/usr/bin/python3

def remove_char_at(strr, n):
    """Create a copy of the string without the character at position n."""
    if n < 0:
        return (strr)
    return (strr[:n] + strr[n+1:])
