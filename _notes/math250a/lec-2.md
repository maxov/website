---
layout: note
title: "Math 250A Lecture 2"
date: 2018-08-28
class: math250a
author: Max Ovsiankin
lecturer: David Nadler
---

# Administrivia

- Nadler will eventually have fixed office hours 
- Midterm and final still not set

There's way too much to teach for this class.
Nadler would much rather do it honestly and humanly.
The goal is to teach stuff that is interesting and useful.

# Functors

Recall:

::: defn
A _functor_ $F \colon \mathscr{C} \to \mathscr{D}$ consists of:

1. map of objects $F \colon \mathscr{C} \to \mathscr{D}
2. For $x, y \in \mathscr{C}$ a map of morphisms
    $$ F \colon \text{Hom}_\mathscr{C}(x, y) \to \text{Hom}_\mathscr{D}(Fx, Fy)$$

    so that $F(f \circ g) = F(f) \circ F(g)$ and $F(e_x) = e_{Fx}$
:::

__Example.__ Take the following morphism:

$$ F \colon \text{Top}^{op} \to \text{Vect}_\mathbb{R}$$
$$ \mathscr{X} \mapsto C^0(\mathscr{X}, \mathbb{R}) $$

Which maps a topological space to a vector space of continuous functions $\mathscr{X} \to \mathbb{R}$.
On morphisms, this acts as follows:

$$ \underbrace{(\mathscr{X} \stackrel{f}{\to} \mathscr{Y})}_{\in \text{ Hom}_{\text{Top}^{op}}(\mathscr{Y}, \mathscr{X})} 
\mapsto \ \ 
\underbrace{(C^0(\mathscr{X}, \mathbb{R}) \leftarrow C^0(\mathscr{Y}, \mathbb{R}))}_{\in \text{ Hom}_{\text{Vect}_\mathbb{R}}(C^0(\mathscr{Y}, \mathbb{R}), C^0(\mathscr{X}, \mathbb{R}))}$$

