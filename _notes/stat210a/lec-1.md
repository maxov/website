---
layout: note
title: "Stat 210A Lecture 1: Measure Theory, Estimation"
date: 2018-08-23
class: stat210a
author: Max Ovsiankin
lecturer: Will Fithian
---

# Administrivia

- Professor: Will Fithian
- Statistics 210A - Intro to Statistical Theory for Statistics Phds
    - by show of hands, the class is mostly _not_ statistics people
- Office hours: held at different times to minimize conflicts, can also contact via email or appt, 
- GSI: Xiao Li, office hours TBD. GSI last year as well
- web resources:
    - bCourses
    - course homepage
- weekly assignments on Thursdays due at the start of class
- fast paced, high workload. made to prepare for research career in statistics
- selection of topics:
    - statistical decision theory (bayesian, frequentist)
    - exponential families
    - hypothesis testing, p-values
    - resampling, large-sample theory
    - some of Fithian's research
- it's possible to learn statistics with a strong technical background, but getting acquainted to methods is still a challenge
- pretty workload-heavy class, people have complained before. Should only take two like this class at a time
- textbooks freely available online from SpringerLink with student account
- weekly problem sets and final exam
    - can drop lowest HW grade, save this for a good time in the semester
- __Collaboration:__ 
    - challenging material, so collaboration encouraged
    - do not consult solutions for previous iterations of this course! 
    - collaboration policies:
        - write up the problem yourself
        - acknowledge who/what resources were used outside of class

# Measure Theory Basics

Measure theory is a rigorous grounding for probability, it is covered in more detail in Stat 205A, which is a great course.
Some departments don't teach measure theory, Andrew Gelman has a famous opinion of that.
Fithian's personal opinion: If your optimization is research productivity for your four years as a graduate student, then
it's probably not a good idea.
If your optimization is for a career of good research, then it is probably a good idea.
For this class, we will simply introduce definitions and notation, and sketch the important concepts.

::: defn
Given a set $\mathscr{X}$, a _measure_ $\mu$ maps subsets $A \subseteq \mathscr{X}$ to non-negative numbers $\mu(A) \in [0, \infty]$.
:::

The measure quantifies the "weight" of sets.

__Examples__

- If $\mathscr{X}$ is countable (e.g. $\mathscr{X} = \mathbb{Z}$), then we have the _counting measure_:
  
    $\#(A) =$ number of points in $A$

- If $\mathscr{X} = \mathbb{R}^d$, we have _Lebesgue measure_ ("Leh-beg"):

    $\lambda(A) = \int \ldots \int_A dx_1 \ldots dx_n = \text{Vol}(A)$.

As the theory says, it's impossible to consistently define measure for all subsets of $\mathbb{R}$ or similar sets like $[0, 1]$. Lebesgue measure gives a measure for every set we encounter in life, but there are more exotic non-measurable sets it does not assign a weight to.

This necessitates the "domain of definition" of a measure, a $\sigma$-field:

::: defn
A $\sigma$-field $\mathscr{F}$ is the collection of all subsets for which $\mu$ is defined.
It must satisfy certain closure properties.
:::

Note that a measure is not required to define $\mathscr{F}$, it has its own definition which encapsulates satisfying closure properties like set unions, intersections, and complements.

__Examples__

- $\mathscr{X}$ countable, $\mathscr{F} = 2^\mathscr{X}$ (all subsets of $\mathscr{X}$), this is a "typical" $\sigma$-field
- $\mathscr{X} = \mathbb{R}^n$, take the _Borel $\sigma$-field_ $\mathscr{F}$, which is the smallest sigma field that includes rectangles

  (we start with rectangles, then expand the $\sigma$-field by taking intersections, unions, repeatedly, etc.)

The domain of a measure may not always be a powerset, but it will generally be a $\sigma$-field.

::: defn
Given $(\mathscr{X}, \mathscr{F})$ where $\mathscr{X}$ is a set, $\mathscr{F}$ a $\sigma$-field over $\mathscr{X}$, a measure is a mapping $\mu \colon \mathscr{F} \to [0, \infty]$ where:

$\mu(\bigcup_{i=1}^\infty A_i) = \sum_{i=1}^\infty$ for countable disjoint collection $A_1, A_2, \ldots$
($A_i \cap A_j = \emptyset$ for $i \neq j$)


Then $(\mathscr{X}, \mathscr{F})$ is a _measurable space_.
:::
::: defn
A _probability measure_ $P$ is a measure with $P(\mathscr{X}) = 1$.
:::

Measures don't only allow weights of sets, they let us define integrals that put weight $\mu(A)$ on set $A$.


__Examples:__ In the following, $f \colon \mathscr{X} \to \mathbb{R}$

- Counting measure: $\int f(\mathscr{X}) d \#(x) = \sum_{x \in \mathscr{X}} f(x)$ 
- Lebesgue measure: $\int f(x) d \lambda(x) = \int \ldots \int f(x) dx_1 \ldots dx_n$

In undergraduate probability without measure theory, we can run into issues such as the max of a standard normal variable and constant 0, which is some sort of hybrid of continuous and discrete space. Measure theory lets us deal with this by just defining measure how we like, and we can deal with these cases consistently.

# Densities

::: defn
Given $(\mathscr{X}, \mathscr{F})$, two measures $P, \mu$, we say $P$ is _absolutely continuous_ with respect to $\mu$ if for all $A \in \mathscr{F}$, if $\mu(A) = 0$, then $P(A) = 0$. We write $P \ll \mu$.
:::

As an example, the binomial distribution is absolutely continuous w.r.t counting measure, but not Lebesgue measure.

::: thm
(_Radon-Nikodym_) If $P \ll \mu$, we can define a _density function_ $p(x) = \frac{dP}{d\mu}(x)$ where:

$$P(A) = \int_A p(x) d\mu(x) = \int p(x) 1_A(x) d \mu(x)$$
:::

The notation is meant to be suggestive. In the typical case, $P$ is a probability measure, $\mu$ is any old measure. The density function $p$ can be interpreted as a "re-weighting" function on $\mu$.

We can take integrals with the density function like so:

$$ \int f(x) dP(x) = \int f(x) p(x) d \mu(x)$$

If $P$ is a probability measure and $\mu$ a counting measure, then $p(x)$ is called a _probability mass function_.
If $P$ is a probability measure and $\mu$ a Lebesgue measure, then $p(x)$ is called a _probability density function_.

The standard process in this class is to start off with $\mu$, then we can produce various densities to re-weight $\mu$ using the theorem,
but now we can integrate over all these probability densities by just integrating over $\mu$.

Note that densities are not, in general, unique.

Consider $\varphi(x)$, the pdf of the standard normal Gaussian. Let $\varphi' = \varphi$, except $\varphi'(0) = 0$. The densities are not
"the same", but the induced measure will be identical.

In other words, we have two densities $p_1, p_2$ for the same measure $P$. In the general case, the two densities must differ on a measure-0 set w.r.t $\mu$:

$$ \mu(\{ x \in \mathscr{X} \colon p_1(x) \neq p_2(x) \}) = 0 $$

# Random variables

::: defn
1. $(\Omega, \mathscr{F}, \mathbb{P})$ is a _probability space_ if $\Omega$ is a set, $\mathscr{F}$ is a $\sigma$-field over it, and $\mathbb{P}$ is a probability measure over them.
2. $\omega \in \Omega$ is an _outcome_, $\Omega$ is the _outcome space_
3. $A \in \mathscr{F}$ is called an _event_ ($A \subseteq \Omega$)
4. $P(A)$ is called the _probability_ of $A$.
:::

::: defn
A _random variable_ (or _vector_) is a function $X \colon \Omega \to \mathscr{X}$ which tells us the value of $X$ for each outcome in $\Omega$. $\mathscr{X}$ is some destination space.

We say $X$ has _distribution_ Q ($X \sim Q$) if

$$ P(X \in B) = \mathbb{P}(\{ \omega \colon X(\omega) \in B \}) = P(X^{-1}(B)) = Q(B)$$
:::

Here $B \subseteq \mathscr{X}$, and we require it to have a measureable preimage under $X$.
In some sense, $Q$ is "induced" by $\mathbb{P}$ and $X$.

__Example.__ We flip a coin 100 times independently, with outcomes heads and tails.

$\Omega = \{ H, T\}^n$, let our random variable $X(\omega) = \sum_{i=1}^n \omega_i$ count the number of heads of an outcome.

Then $\mathbb{P}(X \leq 5) = Q(\{ 0, \ldots, 5 \}) = \mathbb{P}(\{ \omega \colon X(\omega) \leq 5 \})$

Then $Q(B) = \int 1_B(x) \varphi(x) dx$

::: defn
The _expectation_ $\mathbb{E}[X] = \int_{\Omega} X(\omega) d P(\omega) = \int_X x d Q(x)$.
:::

# Estimation

Estimation is the first statistical problem we will consider in this class. 
Estimation invovles introducing ambiguity over what the distribution we are considering even is.

::: defn
A _statistical model_ is a family of candidate probability distributions:

$$P = \{ P_\theta \colon \theta \in \Theta \}$$
:::

$\theta$, the _parameter_, can range over anything, not just a real number. $\Theta$ is often a subset of $\mathbb{R}^d$.

The goal of estimation is that we observe some $X \sim P_\theta$, and guess the value of $g(\theta)$, the _estimand_.
We can set $g(\theta) = \theta$, but often we are only interested in some information from $\theta$.

A major theme of the rest of the semester will be how we come up with and evaluate good guesses, for example in an estimation problem.
