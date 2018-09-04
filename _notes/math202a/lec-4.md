---
layout: note
title: "Math 202A Lecture 4: Completions, Complete Spaces"
date: 2018-08-29
class: math202a
author: Max Ovsiankin
lecturer: Marc Rieffel
---

# Existence of Completions

To prove the completion theorem, we need the following claim:

__Claim__: If $\{x_n\}, \{y_n\}$ are Cauchy sequences in $X$, then $\{ d(x_n, y_n) \}$ is a Cauchy sequence in $\mathbb{R}$.

_Proof._ In general for any $(X, d)$, $d(x, y) \leq d(x, z) + d(z, y)$.
Then we have $$|d(x, y) - d(x, z)| \leq d(z, y)$$

Now consider $|d(x_n, y_n) - d(x_m, y_m)|$. We have:
$$|d(x_n, y_n) - d(x_m, y_m)| = |d(x_n, y_n) - d(x_n, y_m) + d(x_n, y_m) - d(x_m, y_m)|$$
$$\leq d(y_n, y_m) + d(x_n, x_m)$$ 

As $n, m$ get large this tends to zero, so $\{ d(x_n, y_n) \}$ is Cauchy in $\mathbb{R}$.

(For theorem, read Knapp "..." Chapter II section 11.)

::: thm
For any metric space $(X, d)$ there exists a completion.\
:::
_Proof._
Let $Cau(X)$ be the set of all Cauchy sequences in $X$.
Define an equivalence relation on $Cau(X)$ as before, with $\{x_n\} \sim \{y_n\}$ iff $d(x_n, y_n) \to 0$.
Let $\tilde{X}$ be the set of equivalence classes for this equivalence relation.
Then embed $X$ into $\tilde{X}$ with the map $j \colon X \to \tilde{X}$ with $x \mapsto \{x, x, \ldots \}$.

Now we need a metric, $\tilde{d}$, on $\tilde{X}$ such that $\tilde{d}(j(x), j(y)) = d(x, y)$. Take $\zeta, \eta \in \tilde{X}$, and $\{ x_n \} \in \zeta, \{y_n \} \in \eta$.
Define $\tilde{d}(\zeta, \eta) = \lim d(x_n, y_n) \in \mathbb{R}$, which exists due to completeness of $\mathbb{R}$ and our claim. To show this is well-defined, we must check if we choose $\{ x_n' \} \in \zeta, \{ y_n' \} \in \eta$, then
$\lim(d(x_n', y_n'))$ agrees. We can use the fact that $\{x_n\} \sim \{x_n'\}$ and $\{y_n\} \sim \{y_n'\}$, but this is left to the reader.

We have $\tilde{d}(j(x), j(y)) = \lim_{n\to\infty} d(x, y) = d(x, y)$, so $j$ is isometric.

We also want the range of $j$ to be dense in $\tilde{X}$. Let $\zeta \in \tilde{X}$ and $\epsilon > 0$ be given.
Get $\{ x_n \} \in \zeta$, choose $N$ s.t. if $m, n \geq N$ then $d(x_m, x_n) < \epsilon$.
Consider $j(x_N) \in j(X) \subset \tilde{X}$.
Then $\lim_{n \to \infty} d(x_N, x_n) < \epsilon$, so $\tilde{d}(j(x_N), \zeta) < \epsilon$.

Finally we want to show that $(\tilde{X}, \tilde{d})$ is complete.

Let $\{ \xi_n \}$ be a Cauchy sequence in $\tilde{X}$.
This is a sequence of equivalence classes of Cauchy sequences in $X$.
For each $m$, choose $x_m \in X$ such that $\tilde{d}(j(x_m), \xi_m) < \frac{1}{m}$.
Then $\{ x_n \}$ is a Cauchy sequence, check that $\{ \xi_n \} \to \overline{\{ x_n \}}$ (the equivalence class of $\{ x_n \}$).

# $\mathbb{R}$ as a Completion

You may think it's not too nice to look at $\mathbb{R}$ as Cauchy sequences in $\mathbb{Q}$.
However, this is exactly what our standard decimal representation does!

For example, look at $3.1416 \in \mathbb{Q}$, this is $3 + \frac{1}{10} + \frac{4}{100} + \frac{1}{1000}$.

More generally, we can represent elements of $\mathbb{R}$ by $\infty$-length decimal expansions, like $1.3333\ldots$ is an infinite series of partial sums in $\mathbb{Q}$.

# A look forward

Consider $C([0, 1])$ under $\|f \|_\infty = \sup \{ | f(t) | \colon t \in [0, 1] \}$.
Then $C([0, 1])$ is complete with that metric.

But with $\| f \|_1 = \int_0^1 |f(t)| dt$ or $\| f \|_2 = \left(\int_0^1 |f(t)|^2 dt\right)^{\frac{1}{2}}$,
the space is not complete with these norms!

For example take $\{ f_n \}_{n \in \mathbb{N}}$, a Cauchy sequence for $\| \cdot \|_1$ (diagram):

The natural function we'd take to complete this sequence is not actually continuous.

The issue is that these spaces are too complicated for us to understand completions right now.
We want a concrete representation of the completion of $C([0, 1])$ under $\| f \|_1$, which motivates a lot
we'll talk about in the 2nd half of this semester.

# Completions of vector spaces

Let $V$ be a vector space, with $\| \cdot \|$ a norm on $V$.

Consider the structure of $Cau(V)$.
We can add Cauchy sequences pointwise and multiply by scalars, so it is actually a vector space!

Let $N(V)$ be the set of Cauchy sequences that converge to $0$.
Then $N(V)$ is a vector subspace of $Cau(V)$.

If $\{ v_n \}, \{ w_n \} \in Cau(V)$, they are equivalent if $d(v_n, w_n) = \| v_n - w_n \| \to 0$, i.e.
$\{ v_n - w_n \} \in N(V)$.

Then $\tilde{V} = \ \ \quot{Cau(V)}{N(V)}$ is a vector space.

For more discussion, see Lang chapter IV section 4.
