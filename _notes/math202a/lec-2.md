---
layout: note
title: "Math 202A Lecture 2: Sequences, Cauchy, Completions"
date: 2018-08-24
class: math202a
author: Max Ovsiankin
lecturer: Marc Rieffel
---

# Administrivia
- The GSI will be Nick Brody. Office hours and office
- Midterm by vote will be Monday, Oct 29
- Course webpage has been updated. Homework is recommended to be written in Latex, submitted on paper
- Shoutout to [arXiv.org](https://arxiv.org) - preprints, a wonderful way to see the current state of a subject

# Seminorm

As an example of a seminorm, let $V$ be a vector space, and take $\varphi \in V'$, a linear functional in the dual space.
Define

$$ p_\varphi(\nu) = | \varphi(\nu) |$$

# Sequences

::: box
__Definition.__ Let $X$ be a set. A _sequence_ in $X$ is a function $f \colon \mathbb{N} \to X$. We notate it as
$\{ x_n \}$ or $\{ x_n \}_{n \in \mathbb{N}}$.
:::

::: box
__Definition.__ Let $(X, d)$ be a metric space, and let $\{x_n\} \in X$. We say that $\{ x_n \}$ _converges_ to $x_n$, written $\{ x_n \} \to x$, if

$$\forall \epsilon > 0 \ \exists N \in \mathbb{N} \text{ s.t. } \forall n \geq N, d(x, x_n) < \epsilon$$
:::

__Proposition.__ Let $(X, d_x), (Y, d_y)$ be metric spaces, and let $f \colon X \to Y$ be continuous.
Let $\{ x_n \} \to x \in X$. Then $\{ f(x_n) \} \to f(x)$.

This proposition also has a converse. If we apply $f$ to all sequences converging at a point $x \in X$ and the
resultant sequences also converge, then $f$ is continuous at that point.

::: box
__Definition.__ Let $(X, d)
:::
